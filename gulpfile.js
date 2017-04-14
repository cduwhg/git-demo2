/**
 * Created by Mr.Wang on 2017/4/11.
 */
var gulp=require('gulp');

gulp.task('copy',function(){
    gulp.src('src/index.html').pipe(gulp.dest('dist/'));//���ļ�������dist�ļ�����
})

gulp.task('dist',function(){
    gulp.watch('src/index.html',['copy']);//����index.html�ļ��Ƿ�仯���仯�Ļ�������ִ��task����
})

var browserSync = require('browser-sync').create();

// Static server      ʵ���Զ�ͬ��
gulp.task('browser', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
