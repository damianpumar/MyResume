const gulp = require("gulp"),
  gutil = require("gulp-util"),
  cssClean = require("gulp-clean-css"),
  terser = require("gulp-terser"),
  babel = require("rollup-plugin-babel"),
  rollup = require("gulp-better-rollup"),
  imagemin = require("gulp-imagemin"),
  pkg = require("./package.json"),
  size = require("gulp-size"),
  nunjucksRender = require("gulp-nunjucks-render"),
  header = require("gulp-header"),
  fs = require("fs"),
  del = require("del"),
  htmlmin = require("gulp-htmlmin");

const isRelease = gutil.env.env === "release";

const date = new Date();

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
  "",
].join("");

const tasks = {
  html: {
    src: "src/index.html",
    dest: "dist",
    fun: () => nunjucksRender(nunjucksConfig),
    min: () => htmlmin({ collapseWhitespace: true, removeComments: true }),
  },
  cv: {
    src: "src/cv.html",
    dest: "dist",
    fun: () => nunjucksRender(nunjucksConfig),
    min: () => htmlmin({ collapseWhitespace: true, removeComments: true }),
  },
  images: {
    src: "src/images/**/*",
    dest: "dist/images",
    min: imagemin,
  },
  styles: {
    src: ["src/css/main.css", "src/css/flat.css"],
    dest: "dist/css",
    banner: true,
    min: () => cssClean({ compatibility: "ie8" }),
  },
  javascript: {
    src: "src/js/main.js",
    dest: "dist/js",
    banner: true,
    fun: () =>
      rollup({ plugins: [babel()] }, "cjs").on("error", (e) =>
        console.log(e.message)
      ),
    min: terser,
  },
  vendorJS: {
    src: "src/js/vendor/**/**",
    dest: "dist/js/vendor",
  },
  vendorCSS: {
    src: "src/css/vendor/**/*",
    dest: "dist/css/vendor",
  },
  portfolio: {
    src: "src/portfolio/**/*",
    dest: "dist/portfolio",
    fun: () => renderPortfolio(),
    min: () => htmlmin({ collapseWhitespace: true, removeComments: true }),
  },
};

function loadFile(file, environment) {
  const config = JSON.parse(fs.readFileSync(file));

  Object.keys(config).forEach(function (key) {
    const value = config[key];

    environment.addGlobal(key, value);
  });

  return environment;
}

function manageEnvironment(environment) {
  loadFile("./src/config/global.json", environment);
  loadFile("./src/config/testimonials.json", environment);
  loadFile("./src/config/skills.json", environment);
  loadFile("./src/config/portfolio.json", environment);
  loadFile("./src/config/social.json", environment);
  loadFile("./src/config/work-history.json", environment);
  loadFile("./src/config/personal-information.json", environment);
  loadFile("./src/config/education.json", environment);

  environment.addFilter("getObject", function (arr, value) {
    for (let index = 0; index < arr.length; index++) {
      const nameValue = arr[index]["name"];

      if (nameValue && nameValue === value) {
        return arr[index];
      }
    }
    return "";
  });

  environment.addFilter("getKey", function (obj, key) {
    return obj[key];
  });

  environment.addFilter("getDate", function (period) {
    const regex = /\d+/;
    const dates = regex.exec(period);

    return dates[0];
  });
}

const nunjucksConfig = {
  manageEnv: manageEnvironment,
};

function renderPortfolio() {
  del.sync(tasks.portfolio.src);

  const config = JSON.parse(fs.readFileSync("./src/config/portfolio.json"));
  const portfolios = config.portfolios;
  const portfoliosQuantity = portfolios.length;

  for (let index = 0; index < portfolios.length; index++) {
    const portfolio = portfolios[index];
    const hasPrevElement = index > 0;
    const hasNextElement = index + 1 != portfoliosQuantity;

    if (hasPrevElement) {
      const prevElement = portfolios[index - 1];
      portfolio.detail.prev = prevElement.url;
    }

    if (hasNextElement) {
      const nextElement = portfolios[index + 1];
      portfolio.detail.next = nextElement.url;
    }

    const fileName = `${portfolio.url}.html`;
    const data = JSON.stringify(portfolio, null, 1);
    const portfolioBody = `{% set data = ${data} %}
		{% extends "src/partials/portfolio-base.html" %}`;

    fs.writeFileSync(`./src/portfolio/${fileName}`, portfolioBody);
  }

  return nunjucksRender(nunjucksConfig);
}

function createTask(title) {
  let task = tasks[title];

  let gulpTask = gulp.src(task.src);

  if (task.fun) gulpTask = gulpTask.pipe(task.fun());

  if (isRelease && task.min) gulpTask = gulpTask.pipe(task.min());

  if (task.banner) gulpTask = gulpTask.pipe(header(banner, { pkg }));

  gulpTask = gulpTask.pipe(size({ pretty: true, title }));

  gulpTask = gulpTask.pipe(gulp.dest(task.dest));

  return gulpTask.on("error", console.log);
}

module.exports.createTask = createTask;
