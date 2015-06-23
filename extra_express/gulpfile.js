var gulp = require('gulp')
	, del = require('del')
	, concat = require('gulp-concat')
	, uglify = require('gulp-uglify')
;

gulp.task('clean', function(cb){
	del('public', cb);
});

gulp.task('js', ['clean'], function(){
	//console.log("i'm running");
	return gulp.src('client/js/*.js')
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(gulp.dest('public/js'));
});

gulp.task('html', ['clean'], function(){
	return gulp.src('client/*.html')
		.pipe(gulp.dest('public'));
});

gulp.task('default', ['html', 'js']);
