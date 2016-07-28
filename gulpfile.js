
var gulp = require('gulp');
var gulpCopy = require('gulp-copy');

gulp.task('default', function () {
	gulp.src([
            'node_modules/bootstrap/dist/css/bootstrap.min.css', 
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/bootstrap/fonts/glyphicons-halflings-regular.eot',
            'node_modules/bootstrap/fonts/glyphicons-halflings-regular.svg',
            'node_modules/bootstrap/fonts/glyphicons-halflings-regular.ttf',
            'node_modules/bootstrap/fonts/glyphicons-halflings-regular.woff',
            'node_modules/bootstrap/fonts/glyphicons-halflings-regular.woff2',
            
        ])
		.pipe(gulpCopy('www'));
});
