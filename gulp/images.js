const gulp = require('gulp');

const imagemin = require("gulp-imagemin");


module.exports = function images() {
  return gulp.src('source/img/*.{gif,png,jpg,svg}')
  .pipe(imagemin([
    imagemin.gifsicle({ interlaced: true }),
    imagemin.mozjpeg({
      quality: 75,
      progressive: true
    }),
    imagemin.optipng({ optimizationLevel: 5 })
  ]))
  .pipe(gulp.dest('build/img'))
}
