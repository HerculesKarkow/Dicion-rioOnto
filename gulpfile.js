
var gulp = require('gulp');
var gulpCopy = require('gulp-copy');

gulp.task('default', function () {
	gulp.src([
            'www/node_modules/bootstrap/dist/css/bootstrap.min.css', 
            'www/node_modules/bootstrap/dist/js/bootstrap.min.js',
            'www/node_modules/jquery/dist/jquery.min.js',
        ])
		.pipe(gulpCopy('www'));
});
