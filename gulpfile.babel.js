import gulp from 'gulp';
import postcss from 'gulp-postcss';
import csswring from 'csswring';
import cssnext from 'postcss-cssnext';
import sourcemaps from 'gulp-sourcemaps';
import postcssImport from 'postcss-import';
import { reload } from 'browser-sync';
import { development } from 'gulp-environments';

const processors = [
  postcssImport,
  cssnext({
    features: {
      customProperties: {
        warnings: false
      },
      autoprefixer: {
        browsers: ['last 2 versions']
      },
      calc: {
        precision: 10
      }
    }
  }),
  csswring
];

module.exports = function() {
  gulp.src('./src/assets/stylesheets/app.css')
    .pipe(development(sourcemaps.init()))
    .pipe(postcss(processors))
    .pipe(development(sourcemaps.write('.')))
    .pipe(gulp.dest('./build'))
    .pipe(development(reload({stream: true})));
};
