/*
var model = require('../model/users');

exports.list= function(req, res, next) {
    var result = model.getAll( function(result) {
        res.render('users',
        { 'title': 'User List', 'data': result });
    });
};

*/ 
require('../models/users.model');
var User = require('mongoose').model('Users');

exports.check = (req,res,next) =>{
    console.log("The user you're checking is:");
    console.log(req.body);
    if (User.find()){
        
    }
};

exports.create = function(req,res,next){
    console.log(req.body);
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
    User.find({unername:''}, function(err, users){
        console.log("Here is a list of the data:"+users);
        if(err) {
            return next(err);
        } else {
            res.render('users',
            {'title':'All users', 'data': users});
        }
    });
};

exports.read = function(req, res) {
    res.render('',
    {'title':'User page', 'data':req.user});
};

exports.userByName = function(req, res, next) {
    User.findOne({username:req.params.uName}, function(err, user) {
            if (err) {
            return next(err);
            } else {
                console.log("user from controller:"+user);
                res.render('user',
                {'title':'User Page', 'data': user});
        }
    });
};

exports.updatePassword = function(req, res, next) {
    User.findOne({username:req.params.uName}, function(err, user) {
            if (err) {
            return next(err);
            } else {
                console.log("user from controller:"+user);
                res.render('user',
                {'title':'User Page', 'data': user});
        }
    });
};

exports.userByID = function(req, res, next) {
    User.findOne({__id:req.params.userId }, function(err, user) {
            if (err) {
            return next(err);
            } else {
            console.log("user from controller:"+user);
                res.render('user',
                {'title':'User Page', 'data': user});
        }
    });
};

