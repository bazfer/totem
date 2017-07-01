const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
const Totem = require('./totem');

// define our model
const userSchema = new Schema({
  user_name: {
    type: String,
    unique: true,
    // *** *** *** turn this ON after developing input form in front end
    // required: true
  },
  email: { type: String, 
    unique: true, 
    lowercase: true },
  password: {
    type: String,
    required: true
  },
  recent_totem: Number, 
  totems: [Totem]
}, { timestamps: true });

// PASSWORD ENCRYPTION
// on save hook, encrypt password
// before saving a model, run this function
userSchema.pre('save', function(next) {
  if(!this.isModified("password")){
    console.log('password not modified');
    return next();
  }
    const user = this;
  // generate a salt
    bcrypt.genSalt(10, function(err, salt) {
      if (err) { return next(err); }

    // hash (encrypt) our password using the salt
      bcrypt.hash(user.password, salt, null, function(err, hash) {
        if (err) { return next(err); }

      // overwrite plain text password with encrypted password
        user.password = hash;
        next();
      });
    });
  
  // get access to the user model
});

// compare passwords functionality - the methods is a prop in mongo - need to research sequelize version
userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) { return callback(err); }

    callback(null, isMatch);
  });
}

// create the model class
const ModelClass = mongoose.model('user', userSchema);

// export the model
module.exports = ModelClass;