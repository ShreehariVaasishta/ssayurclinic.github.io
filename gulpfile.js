var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('compress', function() {
  gulp.src('assets/js/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        }
    }))
    .pipe(gulp.dest('dist'))
});
gulp.task('scripts', function() {
  gulp.src(["assets/js/jquery.form.js"])
    .pipe(concat('jquery.form.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/'))
});
gulp.task('scripts1', function() {
  gulp.src(["assets/js/scripts.js"])
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/'))
});
gulp.task('cssfile', function() {
  gulp.src(["assets/css/main.css"])
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('assets/css/'))
});
