import gulp from 'gulp';
import postcss from 'gulp-postcss';
import csswring from 'csswring';
import cssnext from 'postcss-cssnext';
import postcssImport from 'postcss-import';

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

gulp.task('build', function() {
  gulp.src('./src/stylesheets/rhythm.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./build'));
});
