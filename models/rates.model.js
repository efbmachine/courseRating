var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

    
var RateSchema = new Schema({
    course:{
        type:ObjectId,
        ref:'Courses'
    },
    user:{
        type: ObjectId,
        ref:'Users'
    },
    rate:{
        type:Number, min:0, max:5
    },
    comment:String 
    
});
mongoose.model('Rates', RateSchema);
  