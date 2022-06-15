const gulp = require('gulp'),
      sass = require('gulp-sass')(require('sass')),
      watch = require('gulp-watch'),
      prefixer = require("gulp-autoprefixer"),
      browserSync = require("browser-sync").create();

const config = {
    src: {
        sass: "./src/assets/styles/sass/**/*.{sass,scss}",
        css: "./src/assets/styles/css/**/*.css",
    },
    dist: {
        css: './src/assets/styles/css/'
    }
};

gulp.task('sass', () => {
    return gulp
        .src(config.src.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(prefixer())
        .pipe(gulp.dest(config.dist.css))
        .pipe(browserSync.stream());
});

gulp.task('scss', (watchEnd) => {
    gulp.watch(config.src.sass, gulp.series('sass')).on('change', browserSync.reload);
    watchEnd();
});