var config = require('../config'),
    mongoose = require('mongoose');
var fs = require('fs');
module.exports = function() {
    var db = mongoose.connect(config.db);
    
    //load all files in models
    fs.readdir(__dirname + '/../models/',(err, files)=>{
        if (err) throw err;
        files.forEach((element)=>{
            require('../models/'+element.toString()); 
        });
    });
    require('../models/users.model');
    
    return db;
};