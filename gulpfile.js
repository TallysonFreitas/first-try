const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function compilaSass() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/styles'))
}

exports.default = function () {  
    gulp.watch('./src/styles/*.scss', {ignoreInitial:false},gulp.parallel(compilaSass))
}
exports.build = gulp.parallel(compilaSass)
