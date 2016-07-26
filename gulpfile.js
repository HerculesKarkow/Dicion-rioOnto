
var gulp = require('gulp');
var gulpCopy = require('gulp-copy');

gulp.task('default', function () {
	gulp.src([
            'node_modules/bootstrap/dist/css/bootstrap.min.css', 
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/jquery/dist/jquery.min.js',
        ])
		.pipe(gulpCopy('www'));
});
