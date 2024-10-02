const gulp = require('gulp');
const gulpSass = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean');

function limpaBuild() {
    return gulp.src('./build/styles', { read: false, allowEmpty: true })
        .pipe(clean());
}

function compilaSass() {
    return gulp.src('./src/styles/*.scss')
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(gulp.dest('./build/styles')); 
}

function watchSass() {
    gulp.watch('./src/styles/*.scss', compilaSass); 
}

exports.default = gulp.series(limpaBuild, compilaSass, watchSass);
