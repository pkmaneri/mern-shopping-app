
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();

app.use(function (req, res, next) {
  next(createError(404));
});

var indexRouter = require('./routes/index');
var productRouter = require('./routes/product');
var mycartRouter = require('./routes/mycart');
var myorderRouter = require('./routes/myorder');
var venderRouter = require('./routes/vender');



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

const app = express();

app.use(bodyParser.json());

var db = 'mongodb://localhost:27017/mss_db'

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


 if (process.env.NODE_ENV === 'production') {
     app.use(express.static('client/build'));

     app.get('*', (req, res) => {
         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
 }

 