const gulp = require('gulp');

const clean = require('gulp-clean');
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');
const polyfer = require('gulp-polyfer');
const postcss = require('gulp-postcss');
const postcssPresetEnv = require('postcss-preset-env');
const htmlmin = require('gulp-htmlmin');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const gulpSequence = require('gulp-sequence');
const htmlreplace = require('gulp-html-replace');
const extReplace = require('gulp-ext-replace');
const pump = require('pump');

gulp.task('clean', () => gulp.src('./public/*')
  .pipe(clean()));

gulp.task('build-css', () => {
  const plugins = [
    postcssPresetEnv,
  ];
  gulp.src('./app/css/*.css')
    .pipe(concat('styles.css'))
    .pipe(polyfer())
    .pipe(cssnano())
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('build-js', () => {
  pump(
    gulp.src('./app/js/**/*.js'),
    concat('index.js'),
    babel({ presets: ['@babel/env'] }),
    uglify(),
    gulp.dest('./public/js'),
    (err) => {
      console.log(err);
    },
  );
});

gulp.task('mv-img', () => {
  gulp.src('./app/**/*.{ico,png,jpg}')
    .pipe(gulp.dest('./public/'));
});

gulp.task('build-html', () => {
  gulp.src('./app/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(htmlreplace({
      css: './css/styles.css',
      js: './js/index.js',
    }, {
      resolvePaths: true,
    }))
    .pipe(extReplace('.mst'))
    .pipe(gulp.dest('./public/'));
});

gulp.task('mv-mst', () => {
  gulp.src('./app/**/*.mst')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./public/'));
});

gulp.task('build', () => {
  gulpSequence('clean', 'build-css', 'build-js', 'build-html', 'mv-img', 'mv-mst')((err) => {
    if (err) {
      console.log('err');
    }
  });
});

gulp.task('watch', () => {
  gulp.watch('./app/css/**/*.css', ['build-css']);
  gulp.watch('./app/js/**/*.js', ['build-js']);
  gulp.watch('./app/**/*.html', ['build-html']);
  gulp.watch('./app/img/*.{jpg,png}', ['build-html']);
  gulp.watch('./app/**/*.mst', ['mv-mst']);
});
