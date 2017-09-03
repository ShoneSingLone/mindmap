var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
express.mt = require('./my_nodules/tools');

var index = require('./routes/index');
var routeAjax = require('./routes/ajax');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// console.info("use favicon.ico");
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/ajax', routeAjax);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  express.mt.print("404");
  var err = new Error('哎呀，你请求搞错咯┑(￣Д ￣)┍');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  express.mt.print("404 next()");
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
