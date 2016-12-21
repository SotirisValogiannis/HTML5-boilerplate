'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var newer = require('gulp-newer');
var imagemin = require('gulp-imagemin');
var path = require('path');
var webpack = require('webpack-stream');
var sprite = require('gulp-sprite-generator');
var fileinclude = require('gulp-file-include')
var cleanCSS = require('gulp-clean-css');
var postcss = require('gulp-postcss');
var pxtorem = require('postcss-pxtorem');

var paths = {
  scripts: ['./src/js/**/*.js'],
  scriptsBundle: ['./public/js/**/*.js'],
  sass : ['./src/sass/**/*.scss'],
  html : ['./src/*.{html,php}','./public/*.{html,php}'],
  images : ['src/img/*.*'],
  spriteImages: ['src/img/sprite/*.*']
};

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
			browsers: ['last 5 versions'],
			cascade: false
		}))
    //.pipe(postcss([pxtorem({replace: false, rootValue: 14})]))
    .pipe(cleanCSS({compatibility: 'ie10'}))
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

gulp.task('sprites', function() {
    var spriteOutput;

    spriteOutput = gulp.src("./public/css/*.css")
        .pipe(sprite({
            baseUrl:         "./src/img/sprite",
            spriteSheetName: "sprite.png",
            spriteSheetPath: "../img",
            styleSheetName:  "style.css"
        }));

    spriteOutput.css.pipe(gulp.dest("./public/css"));
    spriteOutput.img.pipe(gulp.dest("./public/img"));
});

gulp.task('imagemin', function(){
  gulp.src('./src/img/*')
        .pipe(newer('./public/img/'))
        .pipe(imagemin())
        .pipe(gulp.dest('./public/img'))
});

gulp.task('fileinclude', function() {
  gulp.src(['src/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./public/'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
	livereload.listen();
    gulp.watch(paths.spriteImages, ['sprites']);
    gulp.watch(paths.images, ['imagemin']);
  	gulp.watch(paths.sass, ['sass']);
  	gulp.watch(paths.html, ['html','fileinclude']);
    gulp.watch(paths.scriptsBundle, ['html']);
});


gulp.task('webpack', function() {
  return gulp.src('./')
  .pipe(webpack( require('./webpack.config.js') ))
  .pipe(gulp.dest('./'));
});
