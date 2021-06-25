const del = require ('del');

module.exports = function clean_old() {
  return del([
    'build/css/**/*',
    '!build/css/{styles,print}-*.css',
    'build/rev.json',
]);
}
