var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var UserSchema = new Schema({
    /*
        var UserSchema = new Schema({ ...
            courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }]
        })
    */
    email:{
        type: String,
        required:true,
        unique:true
    },
    username: {
        type: String,
        trim: true,
        required:true,
        unique:true
    },
    password: String,
    created: {
        type: Date,
        default: Date.now
    }
});

UserSchema.methods.generateNewPassword = function(cb){
    this.password = 'new';
    this.save(cb);
};
module.exports = mongoose.model('Users', UserSchema);
  