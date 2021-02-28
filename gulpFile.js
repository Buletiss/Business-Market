var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');

gulp.task('compilar-js', function () {
  return gulp
    .src(['*.js', 'components/*.js'])
    .pipe(
      less().on('error', function (err) {
        console.log(err);
      })
    )
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('css'));
});

gulp.task('monitorar', function () {
  gulp.watch(['*.js', 'components/*.js'], gulp.series('compilar-js'));
});

gulp.task('default', gulp.series('monitorar'));
