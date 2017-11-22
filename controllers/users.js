/*
var model = require('../model/users');

exports.list= function(req, res, next) {
    var result = model.getAll( function(result) {
        res.render('users',
        { 'title': 'User List', 'data': result });
    });
};

*/ 
require("../model/users");
var User = require('mongoose').model('Users');
exports.create = function(req,res,next){
    var user = new User(req.body);
    user.save(function(err){
        if(err) {
            return next(err);
        }else {
            res.redirect('/users');
        }
    });
};
exports.list= function(req, res, next) {
    User.find({}, function(err, users){
        console.log(users);
        if(err) {
            return next(err);
        } else {
            res.render('users',
            {'title':'All users', 'data': users});
        }
    });
};


