var gulp = require('gulp');
var minifycss = require('gulp-clean-css');
var uglify = require('gulp-uglify-es').default;
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');
var del = require('del');
var Hexo = require('hexo');
var minifyInlineJSON = require('gulp-minify-inline-json');

gulp.task('clean', function () {
    return del(['public/**/*']);
});

var hexo = new Hexo(process.cwd(), {});
gulp.task('generate', function (cb) {
    hexo.init().then(function () {
        return hexo.call('generate', {
            watch: false
        });
    }).then(function () {
        return hexo.exit();
    }).then(function () {
        return cb()
    }).catch(function (err) {
        console.log(err);
        hexo.exit(err);
        return cb(err);
    })
});

gulp.task('deploy', function () {
    return hexo.init().then(function () {
        return hexo.call('deploy', {
            watch: false
        }).then(function () {
            return hexo.exit();
        }).catch(function (err) {
            return hexo.exit(err);
        });
    });
});

gulp.task('minify-css', function () {
    return gulp.src('./public/**/*.css')
        .pipe(minifycss({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('./public'));
});

gulp.task('minify-html', function () {
    return gulp.src('./public/**/*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        }))
        .pipe(gulp.dest('./public'))
});

gulp.task('minify-js', function () {
    return gulp.src('./public/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public'));
});

gulp.task('minifyInlineJSON', function () {
    return gulp.src('./public/**/*.html')
        .pipe(minifyInlineJSON())
        .pipe(gulp.dest('./public'));
});

gulp.task('default', gulp.series('minify-html', 'minify-css', 'minify-js', 'minifyInlineJSON'));
