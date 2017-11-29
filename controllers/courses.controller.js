require("../models/courses.model");
var Courses = require("mongoose").model('Courses'),
    Rate = require('mongoose').model('Rates');

exports.list= function(req,res,nex){
    Courses.find({}).populate('rates').exec(function(err,courses){
        if (err) throw err;
        else{
            res.render( 'rates',
                        {'title':'Posts','data':courses});
            /*    var data = [];
            courses.forEach(function (course){
                console.log('this is the course: '+course.rates.length);
                for (var i=0; i <=course.rates.length;){
                    Rate.findById(course.rates[i],(err,rate)=>{
                        console.log("this is the rate: "+i+" "+rate);    
                        if (err) throw err;
                        course.push({'comment':rate.comment},{'rate':rate.rate});
                    });i++;
                }
                data['comment'] = course.comment;
                data['rate']= course.rate;
            });
            res.render('rates',
                    {'title':'Posts', 'data':data});
        */
        }
    });
};