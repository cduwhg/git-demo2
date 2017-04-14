/**
 * Created by Mr.Wang on 2017/4/11.
 */
var gulp=require('gulp');

gulp.task('copy',function(){
    gulp.src('src/index.html').pipe(gulp.dest('dist/'));//将文件拷贝到dist文件夹下
})

gulp.task('dist',function(){
    gulp.watch('src/index.html',['copy']);//监视index.html文件是否变化，变化的话，将会执行task任务
})

var browserSync = require('browser-sync').create();

// Static server      实现自动同步
gulp.task('browser', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
