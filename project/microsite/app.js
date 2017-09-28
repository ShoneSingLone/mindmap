let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
if (!express.mt) express.mt = require('./my_nodules/tools');

let index = require('./routes/index');
let routeAjax = require('./routes/ajax');
let users = require('./routes/users');
let app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
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
    let err = new Error('哎呀，你请求搞错咯┑(￣Д ￣)┍');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    express.mt.print(res.locals.error);

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
