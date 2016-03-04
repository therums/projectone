var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var ternary = require('./routes/ternary');
var about = require('./routes/about');

// var dbFunctions = require('../data/blog.js')
var mongoose = require('mongoose')

var app = express();
app.enable('strict routing');
// view engine setup
// app.engine('hbs', hbs.express4({
//   defaultLayout: __dirname + '/views/layout'
// }))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// app.set('view engine', 'hbs')

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes);
app.use('/about', about);
app.use('/happines', about);
app.use('/contact', about);
app.use('/ternary', ternary);
app.use(express.static(path.join(__dirname, '/routes')))

app.get('/about', function(req, res) {
  res.render('about.jade', {title: 'About'});
});

app.get('/happiness', function(req, res) {
  res.render('happiness.jade', {title: 'Happiness'});
});

app.get('/contact', function(req, res) {
  res.render('contact.jade', {title: 'Contact'});
});

app.get('/ternary', function(req, res) {
  res.render('ternary.jade', {title: 'Ternary'});
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
