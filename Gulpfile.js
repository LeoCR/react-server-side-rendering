const gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('libs', ()=> {
  return gulp.src([
    './src/vendors/jquery/jquery.js',
    './src/vendors/scrollmagic/minified/ScrollMagic.min.js',
    './src/vendors/greensock/minified/TweenMax.min.js',
    './src/vendors/anime/anime.min.js',
    './src/vendors/scrollmagic/minified/plugins/animation.gsap.min.js',
    './src/vendors/greensock/minified/plugins/ScrollToPlugin.min.js',
    './src/vendors/greensock/minified/plugins/TextPlugin.min.js'
  ])
  .pipe(concat('libs.min.js'))
  .pipe(gulp.dest('./public/js/'));
});

gulp.task('watch', ()=> {
      gulp.watch([
        './src/vendors/jquery/jquery.js',
        './src/vendors/scrollmagic/minified/ScrollMagic.min.js',
        './src/vendors/greensock/minified/TweenMax.min.js',
        './src/vendors/anime/anime.min.js',
        './src/vendors/scrollmagic/minified/plugins/animation.gsap.min.js',
        './src/vendors/greensock/minified/plugins/ScrollToPlugin.min.js',
        './src/vendors/greensock/minified/plugins/TextPlugin.min.js'
      ],gulp.series('libs'));
});
gulp.task('default', gulp.parallel('libs','watch'));