var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
    
var CoursesSchema = new Schema ({
    code: String,
    title: String,
    professor:String,
    rates:[{
        type:ObjectId,
        ref:'Rates'
    }]
});
mongoose.model('Courses',CoursesSchema);