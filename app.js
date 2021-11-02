var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
var mongoose = require('mongoose');
const fs = require('fs')



// Connecting to database
var db = 'mongodb://localhost:27017/mss_db'


if (process.env.NODE_ENV === 'production') {
  app.use(express.static("client/build"))
  }
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server started on port ${port}`));

console.log("mongo => ", db)
mongoose.Promise = global.Promise;

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function (error) {
  if (error) {
    console.log("Error!" + error);
  }
});


var indexRouter = require('./routes/index');
var productRouter = require('./routes/product');
var mycartRouter = require('./routes/mycart');
var myorderRouter = require('./routes/myorder');
var venderRouter = require('./routes/vender');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.use('/', indexRouter);
app.use('/v1', venderRouter);
app.use('/v1', productRouter);
app.use('/v1', mycartRouter);
app.use('/v1', myorderRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const path = require('path');

// const items = require('./routes/api/items');

// const app = express();

// app.use(bodyParser.json());

// const db = require('./config/keys').mongoURI;
// mongoose
//  .connect(db)
//  .then(() => console.log('MongoDB Connected...'))
//  .catch(err => console.log(err));


//  app.use('/api/items', items);

//  if (process.env.NODE_ENV === 'production') {
//      app.use(express.static('client/build'));

//      app.get('*', (req, res) => {
//          res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     });
//  }

//  const port = process.env.PORT || 5000;
//  app.listen(port, () => console.log(`Server started on port ${port}`));
