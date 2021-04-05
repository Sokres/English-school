const gulp = require('gulp');

module.exports = function copy(){
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/*.{ico,png,svg}"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
}
