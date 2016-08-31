'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var path = require('path');
var webpack = require('webpack-stream');

var paths = {
  scripts: ['./src/js/**/*.js'],
  scriptsBundle: ['./public/js/**/*.js'],
  sass : ['./src/sass/**/*.scss'],
  html : ['./src/*.{html,php}'],
};

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
			browsers: ['last 5 versions'],
			cascade: false
		}))
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
});

gulp.task('html', function () {
  return gulp.src('./public/*.{html,php}')
    .pipe(livereload());
});

gulp.task('svgstore', function () {
    return gulp
        .src('./src/img/svg/*.svg')
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(svgstore())
        .pipe(gulp.dest('./public/img/'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
	livereload.listen();
  	gulp.watch(paths.sass, ['sass']);
  	gulp.watch(paths.html, ['html']);
    gulp.watch(paths.scriptsBundle, ['html']);
});


gulp.task('webpack', function() {
  return gulp.src('./')
  .pipe(webpack( require('./webpack.config.js') ))
  .pipe(gulp.dest('./'));
});
