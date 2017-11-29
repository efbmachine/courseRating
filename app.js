process.env.NODE_ENV = process.env.NODE_ENV || 'development' ;

var mongoose=require('./config/mongoose'),
    express = require('./config/express');

var app = express();

var index = require('./routes/index');
var users = require('./routes/users');
var rates = require('./routes/rates');

app.use('/', index);
app.use('/users', users);
app.use('/rates',rates);

module.exports = app;