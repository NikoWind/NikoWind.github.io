// Dependencies
const gulp = require('gulp')

const isProd = process.env.NODE_ENV === 'production'

console.log('gulp env :', process.env.NODE_ENV)

gulp.task('livereload', function() {
  const nodemon = require('nodemon')
  const livereload = require('livereload')
  const server = livereload.createServer({ delay: 1000 })
  server.watch(__dirname)
  nodemon({
    // the script to run the app
    script: 'bin/www',
    ext: 'js,css,html'
  }).on('restart', function() {})
})

gulp.task('sass', function() {
  const sass = require('gulp-sass')
  const postcss = require('gulp-postcss')
  const autoprefixer = require('autoprefixer')
  const sourcemaps = require('gulp-sourcemaps')

  if (isProd)
    return gulp
      .src('./views/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss([autoprefixer]))
      .pipe(gulp.dest('./public/css'))
  else
    return gulp
      .src('./views/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss([autoprefixer]))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./public/css'))
})

gulp.task('build', ['sass'])

gulp.task('watch', ['livereload', 'sass'], function() {
  gulp.watch('./views/**/*.scss', ['sass'])
})
