require("../models/rates.model");
require("../models/courses.model");
var Courses = require("mongoose").model('Courses'),
    Rate = require("mongoose").model('Rates');
    
exports.list= function(req,res,next){
    Rate.find({},function(err,rates){
        if (err) 
            throw err;
        else{
            res.render('rates',
            {'title':'Posts', 'data':rates});
        }
    });
};

exports.create = function(req,res,next){
    console.log(req.body);
    var rate = new Rate(req.body);
    // Check if the course already exists
    Courses.findOneAndUpdate({ code: req.body['code'],
                                                professor: req.body['professor']}, 
                                            {$set: {title:req.body['title']},$push:{rates: rate._id}},
                                            {upsert:true},
                                            (err,data)=>{
                                                if (err) throw err;
                                                rate.course = data._id;
                                                rate.save(function(err){
                                                    if(err) {
                                                        return next(err);
                                                    }else {
                                                        res.redirect('/rates');
                                                    }
                                                });    
                            });
};