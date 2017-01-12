var gulp = require('gulp')
	, nodemon = require('gulp-nodemon')
	, livereload = require('gulp-livereload')
	, connect = require('gulp-connect')


//setting
var settings = require('../gulpfile_settings');

gulp.task('server', function () {
	livereload.listen();

	nodemon({
		script: 'server.js'
		, watch: 'root'
		, ignore: [  // nodemon で監視しないディレクトリ
			'node_modules'
		],
		stdout: false
})
	.on('start',function () {
		console.log('started')
	})
	.on('restart', function () {
		console.log('restarted!')
		gulp.src(settings.dest.name + '/**/*.*').pipe(connect.reload())

	})
	.on('crash', function() {
		console.error('Application has crashed!\n')
		stream.emit('restart', 10)  // restart the server in 10 seconds
	})
})
