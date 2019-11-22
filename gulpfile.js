const 
  port = 8080
  address = `http://localhsot:${port}`,
  gulp = require("gulp"),
  cssClean = require("gulp-clean-css"),
  gulpSequence = require("gulp-sequence"),
  uglify = require("gulp-uglify"),
  del = require("del"),
  babel = require("rollup-plugin-babel"),
  rollup = require("gulp-better-rollup"),
  imagemin = require("gulp-imagemin"),
  htmlmin = require("gulp-htmlmin"),
  size = require("gulp-size"),
  nunjucksRender = require("gulp-nunjucks-render"),
  header = require("gulp-header"),
  manifest = require("gulp-manifest"),
  pkg = require("./package.json"),
  protractor = require("gulp-protractor"),
  spawn = require('child_process').spawn;

let isRelease = false;

let date = new Date();

const banner = [
  "/*!\n",
  " * <%= pkg.title %> v." +
    date.getDay() +
    "." +
    date.getMonth() +
    "." +
    date.getFullYear() +
    "+ (<%= pkg.homepage %>)\n",
  " * Copyright " + date.getFullYear(),
  " <%= pkg.author %>\n",
  " * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n",
  " */\n",
  ""
].join("");

let tasks = {
  html: {
    src: "src/index.html",
    dest: "dist",
    fun: nunjucksRender,
    min: () => htmlmin({ collapseWhitespace: true, removeComments: true })
  },
  images: {
    src: "src/images/**/*",
    dest: "dist/images",
    min: imagemin
  },
  styles: {
    src: [
      "src/css/main.css",
      "src/css/animations.css",
      "src/css/align.css",
      "src/css/768.css"
    ],
    dest: "dist/css",
    banner: true,
    min: () => cssClean({ compatibility: "ie8" })
  },
  javascript: {
    src: "src/js/main.js",
    dest: "dist/js",
    banner: true,
    fun: () =>
      rollup({ plugins: [babel()] }, "cjs").on("error", e =>
        console.log(e.message)
      ),
    min: uglify
  },
  vendorJS: {
    src: "src/js/vendor/**/**",
    dest: "dist/js/vendor"
  },
  vendorCSS: {
    src: "src/css/**/*",
    dest: "dist/css"
  },
  portfolio: {
    src: "src/portfolio/**/*",
    dest: "dist/portfolio",
    fun: nunjucksRender,
    min: () => htmlmin({ collapseWhitespace: true, removeComments: true })
  }
};

function createTask(title) {
  let task = tasks[title];

  let gulpTask = gulp.src(task.src);

  if (task.fun) gulpTask = gulpTask.pipe(task.fun());

  if (isRelease && task.min) gulpTask = gulpTask.pipe(task.min());

  if (task.banner) gulpTask = gulpTask.pipe(header(banner, { pkg }));

  gulpTask = gulpTask.pipe(size({ pretty: true, title }));

  return gulpTask.pipe(gulp.dest(task.dest)).on("error", console.log);
}

gulp.task("html", function() {
  return createTask("html");
});

gulp.task("favicon", function() {
  return gulp.src("src/favicon.ico").pipe(gulp.dest("dist"));
});

gulp.task("images", ["favicon"], function() {
  return createTask("images");
});

gulp.task("styles", function() {
  return createTask("styles");
});

gulp.task("javascript", function() {
  return createTask("javascript");
});

gulp.task("vendorJS", function() {
  return createTask("vendorJS");
});

gulp.task("vendorCSS", function() {
  return createTask("vendorCSS");
});

gulp.task("portfolio", function() {
  return createTask("portfolio");
});

gulp.task("robots", function() {
  gulp.src("src/robots.txt")
  .pipe(gulp.dest("dist"))
})

gulp.task("appCache", function() {
  gulp
    .src(["dist/**/*"])
    .pipe(
      manifest({
        hash: true,
        preferOnline: true,
        network: ["http://*", "https://*", "*"],
        filename: "manifest.appcache",
        exclude: "manifest.appcache"
      })
    )
    .pipe(gulp.dest("dist"));
});

gulp.task("clean", function() {
  return del("dist/**/*");
});

gulp.task("css", gulpSequence("vendorCSS", "styles"));

gulp.task(
  "build",
  gulpSequence(
    "clean",
    "html",
    "portfolio",
    "css",
    "vendorJS",
    "javascript",
    "images"
  )
);

gulp.task("release", ["clean"], function() {
  isRelease = true;

  return gulp.start(gulpSequence("build", "appCache", "robots"));
});

gulp.task("release-preview", ["clean"], function() {
  isRelease = true;

  return gulp.start("dev");
});

gulp.task('test', function() {
  const dev = gulp.start("dev");

      gulp.src('./src/tests/*.js')
        .pipe(protractor.protractor({
            configFile: './src/test.js'
        }))
        .on('end', function () {
            gulp.stop("dev");
        });

  return dev;
});

gulp.task('webdriver-update', protractor.webdriver_update);

gulp.task('webdriver-standalone', ['webdriver-update'], protractor.webdriver_standalone);

gulp.task("dev", ["build"], function() {
  gulp.watch("src/css/main.css", ["styles"]);
  gulp.watch("src/css/768.css", ["styles"]);
  gulp.watch("src/js/*.js", ["javascript"]);
  gulp.watch("src/**/*.html", ["html", "portfolio"]);
  gulp.watch("src/images/**/*", ["images"]);

  startServer();
});

function startServer() {
  const Koa = require("koa"),
    serve = require("koa-static"),
    logger = require("koa-logger");

  let app = new Koa();
  app.use(logger());
  app.use(serve("./dist"));
  app.listen(port);
  console.log(`Listening on ${address}`);
}
