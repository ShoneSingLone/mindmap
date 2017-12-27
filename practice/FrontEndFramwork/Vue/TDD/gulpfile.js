'use strict';

var gulp = require('gulp');
var bs = require('browser-sync').create();

gulp.task('server', [], () => {
    bs.init({
        server: {
            baseDir: "./",
        },
        port: 5001,
        reloadOnRestart: true,
        // browser: "google chrome"
    });
    gulp.watch('./*.html', ['', bs.reload]);
});

