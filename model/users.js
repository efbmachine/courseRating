var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var UserSchema = new Schema({
    name: String,
    password: String
});
mongoose.model('Users', UserSchema);