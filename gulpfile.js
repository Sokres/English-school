const gulp = require('gulp');
const server = require('./gulp/server')
const htmlmin = require('./gulp/gulp-htmlmin')
const styles = require('./gulp/styles')
const del = require("./gulp/clean");
const script = require("./gulp/script");
const images = require("./gulp/images");
const webp = require("./gulp/webp");
const sprite = require("./gulp/sprite");
const copy = require('./gulp/copy');
// const cache = require('./gulp/cache');
const build_html = require('./gulp/build_html');
const build_style = require('./gulp/build_style');
const build_clean = require('./gulp/build_clean');
// const linghthouse = require('./gulp/linghthouse');



// module.exports.start = gulp.series(server,del,htmlmin,styles,script,images, webp, copy, sprite);
function setMode(isProduction = false) {
  return cb => {
    process.env.NODE_ENV = isProduction ? 'production' : 'development'
    cb()
  }
}

const dev = gulp.parallel(htmlmin, styles, script, copy, images, webp,)

const build = gulp.parallel(build_html, build_style, script, copy, images, webp,)

// const buildfull = gulp.series(del,sprite, devfull, cache)

const work = gulp.series(del,sprite, dev)

module.exports.start = gulp.series(setMode(), work,   server)
module.exports.build = gulp.series(setMode(true), del,sprite, build, build_clean )
// module.exports.build = gulp.series(setMode(), buildfull )

// module.exports.linghthouse = gulp.series(linghthouse)
