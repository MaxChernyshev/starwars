let { src, dest, watch, series, parallel } = require('gulp');
let rename = require('gulp-rename');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let sourcemaps = require('gulp-sourcemaps');
let babel = require('gulp-babel');
let concat = require('gulp-concat');

function styles() {
  return src([
    'src/scss/style.scss',
    'src/scss/colors.css',
    '../../../libraries/bootstrap/css/bootstrap.css'
  ])
    .pipe(sass({
      errorLogToConsole: true,
      outputStyle: 'compressed',
    }).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(rename({suffix: '.min'}))
    .pipe(concat('style.min.css'))
    .pipe(dest('dist/css'))
}
exports.styles = styles;


function scripts() {
  return src(['src/js/alerttest.js'])
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(dest('dist/js'))
}
exports.scripts = scripts;


exports.default = series(styles, scripts);
