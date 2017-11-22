var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var UserSchema = new Schema({
    email: String,
    username: {
        type: String,
        trim: true
    },
    password: String,
    created: {
        type: Date,
        default: Date.now
    }
});
mongoose.model('Users', UserSchema);
  