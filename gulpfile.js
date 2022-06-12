const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minifyCSS = require('gulp-clean-css');
const watch = require('gulp-watch');
const rename = require('gulp-rename');

gulp.task('css-minify', function() {
    return gulp.src('./src/assets/styles/*.css')
        .pipe(minifyCSS())
        .pipe(rename({
            basename: "style",
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(gulp.dest('./src/assets/styles/'));
});

gulp.task('scss-compile', function() {
    return gulp.src('./src/assets/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/assets/styles/'));
});

gulp.task('scss', function () {
    gulp.watch('./src/assets/styles/style.scss', gulp.series('scss-compile', 'css-minify'))
});