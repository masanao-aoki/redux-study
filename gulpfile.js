var requireDir = require('require-dir');
var dir        = requireDir('./tasks', {recurse: true});

var gulp = require('gulp');
var watch = require('gulp-watch');
var connect = require('gulp-connect');

//setting
var settings = require('./gulpfile_settings');

gulp.task('watch', ['html', 'webpack', 'css', 'img', 'font'], function(){
    gulp.watch(
        settings.watch.html.files,
        ['html']
    );
    gulp.watch(
        settings.watch.css.files,
        ['css']
    );
    gulp.watch(
        [
            settings.watch.js.files,
            settings.watch.es6.files
        ],
        ['webpack']
    );
    gulp.watch(
        settings.watch.img.files,
        ['img']
    );
    gulp.watch(
        settings.watch.font.files,
        ['font']
    );
});

gulp.task('webserver', function() {
    connect.server(
        {
            root: settings.dest.name,
            livereload: true,
            port: 8888
        }
    );
});

gulp.task('livereload', function() {
    gulp.src(settings.dest.name + '/**/*.*')
        .pipe(watch(settings.dest.name + '/**/*.*'))
        .pipe(connect.reload()
    );
});

gulp.task('default', ['watch']);
