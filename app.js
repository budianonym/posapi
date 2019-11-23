var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var search = require('./routes/search');
var order = require('./routes/order');
var app = express();
app.use('/', jsonParser, search.product);
app.use('/', jsonParser, search.compare);
app.use('/', jsonParser, order.allorder);
app.use('/', jsonParser, order.order);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({
    status: 'error',
    reason: "request error"
  });
});

module.exports = app;
