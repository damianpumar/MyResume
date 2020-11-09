const port = 8080,
	address = `http://localhost:${port}`,
	gulp = require("gulp"),
	del = require("del"),
	manifest = require("gulp-manifest"),
	protractor = require("gulp-protractor"),
	createTask = require("./gulpcollaborators").createTask;

gulp.task("html", function () {
	return createTask("html");
});

gulp.task("images", function () {
	return createTask("images");
});

gulp.task("styles", function () {
	return createTask("styles");
});

gulp.task("javascript", function () {
	return createTask("javascript");
});

gulp.task("vendorJS", function () {
	return createTask("vendorJS");
});

gulp.task("vendorCSS", function () {
	return createTask("vendorCSS");
});

gulp.task("portfolio", function () {
	return createTask("portfolio");
});

gulp.task("robots", function () {
	return gulp.src("src/robots.txt").pipe(gulp.dest("dist"));
});

gulp.task("appCache", function () {
	return gulp
		.src("dist/images/**/**")
		.pipe(
			manifest({
				hash: true,
				preferOnline: true,
				network: ["http://*", "https://*", "*"],
				filename: "manifest.appcache",
				exclude: "manifest.appcache",
			})
		)
		.pipe(gulp.dest("dist"));
});

gulp.task("clean", function () {
	return del("dist/**/*");
});

gulp.task("css", gulp.parallel("vendorCSS", "styles"));

gulp.task(
	"build",
	gulp.series("clean", "html", "portfolio", "css", "vendorJS", "javascript", "images")
);

gulp.task("webdriver-update", protractor.webdriver_update);

gulp.task(
	"webdriver-standalone",
	gulp.series("webdriver-update", protractor.webdriver_standalone)
);

gulp.task("cv", function () {
	return createTask("cv");
});

gulp.task(
	"dev",
	gulp.series("build", function () {
		gulp.watch("src/css/main.css", gulp.series("styles"));
		gulp.watch("src/js/*.js", gulp.series("javascript"));
		gulp.watch(["src/partials/*.html", "!src/partials/portfolio-base.html"], gulp.series("html"));
		gulp.watch("src/index.html", gulp.series("html"));
		gulp.watch("src/config/*.json", gulp.series("html", "portfolio"));
		gulp.watch("src/partials/portfolio-base.html", gulp.series("portfolio"));
		gulp.watch("src/images/**/* ", gulp.series("images"));

		startServer();
	})
);

gulp.task("release", gulp.series("build", "robots", "appCache"));

gulp.task("test", function (testDone) {
	const test = gulp.series("release", function (releaseDone) {
		startServer();

		return gulp
			.src("./src/tests/*.js")
			.pipe(
				protractor.protractor({
					configFile: "./src/test.js",
				})
			)
			.on("end", function () {
				stopServer();
				releaseDone();
				testDone();
			});
	});

	return test();
});

let server;

function startServer() {
	const Koa = require("koa"),
		serve = require("koa-static"),
		logger = require("koa-logger");

	let app = new Koa();
	app.use(logger());
	app.use(serve("./dist"));
	server = app.listen(port);
	console.log(`Listening on ${address}`);
}

function stopServer() {
	server.close();
	console.log(`Listening stopped on ${address}`);
}
