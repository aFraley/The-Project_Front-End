var gulp = require('gulp');

var BASE_DIR = '/home/alan/Code/misc/django-ember/ember-front/dist/';

var paths = {
    base: BASE_DIR + '*',
    assets: BASE_DIR + 'assets/*',
    templatePath: '/home/alan/Code/misc/django-ember/server/frontend/templates/frontend',
    staticPath: '/home/alan/Code/misc/django-ember/server/frontend/static/frontend'
};

gulp.task('assets', function(){
  console.log('copying assets');
  var stream = gulp.src(
    '/home/alan/Code/misc/django-ember/ember-front/dist/assets/*'
  ).pipe(gulp.dest(paths.staticPath));
  return stream;
});


// Main Task
gulp.task('default', ['assets'], function(){
  console.log('building');
});
