var gulp = require('gulp');
var beautify = require('gulp-beautify');

gulp.task('beautify-html', function () {
  return gulp
    .src('./public/**/*.html')
    .pipe(beautify.html({
      indent_size: 2,
      indent_char: " ",
      preserve_newlines: false,
      extra_liners: "",
      indent_inner_html: false
    }))
    .pipe(gulp.dest('./public/'));
});