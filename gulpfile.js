var gulp = require('gulp');
var EmailBuilder = require('gulp-email-builder');

var options = {
  encodeSpecialChars: true,
  emailTest : {
    to : 'micdijkstra@gmail.com',
    from: 'thirtytestsender@gmail.com',
    subject : 'Test Email',
    nodemailer: {
      transporter: {
        service: 'gmail',
        auth: {
          user: 'thirtytestsender@gmail.com',
          pass: 'topolog.sensor.degree.capstan.karat.cuss'
        }
      },
      defaults: {}
    }
  }
};

var builder = EmailBuilder(options);

gulp.task('inline', function() {
  return gulp.src(['./*.html'])
    .pipe(builder.inlineCss())
    .pipe(gulp.dest('./inline/'));
});

gulp.task('send', function() {
  return gulp.src(['./inline/*.html'])
    .pipe(builder.sendEmailTest())
});
