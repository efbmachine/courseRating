var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var RateSchema = new Schema({
    code: String,
    title: String,
    professor:String,
    comment:String,
    user:{
        
    }
    
});
mongoose.model('Rate', RateSchema);
  