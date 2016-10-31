// 定义依赖项

/*gulp.task('default', ['webserver']);*/


var gulp = require('gulp'),
    fs = require('fs'),
    connect = require('gulp-connect'),
    respond = require('gulp-respond'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    ngAnnotate = require('gulp-ng-annotate'),
    ngmin = require('gulp-ngmin'),
    minifyCss = require('gulp-minify-css'),
    minifyHtml = require('gulp-minify-html'),
    rev = require('gulp-rev'),
    clean = require('gulp-clean'),
    revCollector = require('gulp-rev-collector'),
    less = require('gulp-less');


//清除多余文件
gulp.task('clean',function(){
    return gulp.src(['build'])
        .pipe(clean())
})


//压缩加密css文件
gulp.task('minCss',['clean'],function(){
    return gulp.src(['css/*.css'])
        .pipe(minifyCss())
        .pipe(concat('cssab.min.css'))
        //pipe(rev())
        .pipe(gulp.dest('build'))
        // .pipe(rev.manifest('minCss.json'))
        // .pipe(gulp.dest('build'))
})

//压缩加密js文件
gulp.task('minJs',['minCss'],function(){
    return gulp.src(['js/app.js','js/controller.js','js/directive.js','js/config.js','js/js.js'])
        .pipe(ngAnnotate())
        .pipe(ngmin())
        .pipe(uglify())
        .pipe(concat('jsab.min.js'))
        //.pipe(rev())
        .pipe(gulp.dest('build'))
        // .pipe(rev.manifest('minJs.json'))
        // .pipe(gulp.dest('build'))
})


//压缩html文件
gulp.task('minifyHtml',['minJs'],function(){
    return gulp.src(['index.html'])
        .pipe(minifyHtml())
        .pipe(gulp.dest('build'))
})

//加密  替换
gulp.task('rev',['minifyHtml'],function(){
    return gulp.src(['build/index.html','build/minCss.json','build/minJs.json'])
                .pipe(revCollector())
                .pipe(gulp.dest('build'))
})

//监听所有js文件和所有的css文件
gulp.task('watch',function(){
    gulp.watch(['js/*.js','css/*.css'],['rev'])
})


//定义connect任务
gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});

//gulp.task('serve',['minJs','connect','watch'])
//定义默认任务
gulp.task('serve',['minifyHtml','connect','watch'])






/*// 定义依赖项
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    less = require('gulp-less');
 
// 定义 webserver 任务
gulp.task('webserver', function() {
    connect.server({
      livereload: true
    });
});
 
// 定义 less 任务
gulp.task('less', function() {
    gulp.src('css/main.less')
        .pipe(less())
        .pipe(gulp.dest('css'))
        .pipe(connect.reload());
});
 
// 定义 watch 任务
gulp.task('watch', function() {
    gulp.watch('css/*.less', ['less']);
})
 
// 定义默认任务
gulp.task('default', ['less', 'webserver', 'watch']);*/




