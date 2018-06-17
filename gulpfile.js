const
    gulp = require('gulp'),
    less = require('gulp-less'),
    cssClean = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    copy = require('gulp-copy'),
    del = require('del'),
    babel = require('rollup-plugin-babel'),
    rollup = require('gulp-better-rollup'),
    imagemin = require('gulp-imagemin'),
    htmlmin = require('gulp-htmlmin'),
    size = require('gulp-size'),
    nunjucksRender = require('gulp-nunjucks-render'),
    header = require('gulp-header'),
    pkg = require('./package.json');

let isRelease = false;

// Set the banner content
const banner = ['/*!\n',
    ' * <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
    ' * Copyright ' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
    ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n',
    ' */\n',
    ''
].join('');

let tasks = {
    html: {
        src: 'src/index.html',
        dest: 'dist',
        fun: nunjucksRender,
        min: () => htmlmin({ collapseWhitespace: true, removeComments: true })
    },
    images: {
        src: 'src/images/**/*',
        dest: 'dist/images',
        min: imagemin
    },
    styles: {
        src: 'src/styles/main.css',
        dest: 'dist/css',
        banner: true,
        min: () => cssClean({ compatibility: 'ie8' }),
    },
    javascript: {
        src: 'src/js/main.js',
        dest: 'dist/js',
        banner: true,
        fun: () => rollup({ plugins: [babel()] }, 'cjs').on('error', e => console.log(e.message)),
        min: uglify
    },
    vendorJS: {
        src: 'src/js/vendor/**/**',
        dest: 'dist/js/vendor',
    },
    vendorCSS: {
        src: 'src/styles/**/*',
        dest: 'dist/css',
    }
};

function createTask(title) {
    let task = tasks[title];

    let gulpTask = gulp.src(task.src);

    if (task.fun)
        gulpTask = gulpTask.pipe(task.fun());

    if (isRelease && task.min)
        gulpTask = gulpTask.pipe(task.min());

    if (task.banner)
        gulpTask = gulpTask.pipe(header(banner, { pkg }))

    gulpTask = gulpTask.pipe(size({ pretty: true, title }));

    return gulpTask.pipe(gulp.dest(task.dest)).on('error', console.log);
}

gulp.task('html', function () {
    return createTask('html');
});

gulp.task('favicon', function () {
    return gulp.src('src/favicon.ico').pipe(gulp.dest('dist'));
});

gulp.task('images', ['favicon'], function () {
    return createTask('images');
});

gulp.task('styles', function () {
    return createTask('styles');
});

gulp.task('javascript', function () {
    return createTask('javascript');
});

gulp.task('vendorJS', function () {
    return createTask('vendorJS');
});

gulp.task('vendorCSS', function () {
    return createTask('vendorCSS');
});

gulp.task('clean', function () {
    return del('dist/**/*');
});

gulp.task('build', ['html', 'styles', 'vendorJS', 'javascript', 'vendorCSS', 'images']);

gulp.task('release', ['clean'], function () {
    isRelease = true;

    return gulp.start(['build']);
});

gulp.task('dev', ['build'], function () {
    gulp.watch('src/styles/**/*.less', ['styles']);
    gulp.watch('src/js/*.js', ['javascript']);
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch('src/images/**/*', ['images']);

    startServer();
});

function startServer() {
    const Koa = require('koa'),
        serve = require('koa-static'),
        logger = require('koa-logger');

    let app = new Koa();
    app.use(logger());
    app.use(serve('./dist'));
    app.listen(8080);
    console.log('Listening on port 8080');
}