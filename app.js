process.env.NODE_ENV = process.env.NODE_ENV || 'development' ;

var index = require('./routes/index');
var users = require('./routes/users');

var mongoose=require('./config/mongoose'),
    express = require('./config/express');

var db = mongoose();
var app = express();

app.use('/', index);
app.use('/users', users);

module.exports = app;
