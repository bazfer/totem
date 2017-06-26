const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config.js');

function tokenForUser(user) {
  // sub is convention, JWTs have a sub prop, sub is for subject, who is this about?
  const timeStamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timeStamp }, config.secret);
}

exports.signin = function(req, res, next) {
  // user has already had their email and password authorized
  // need to give them a token
  res.send({ token: tokenForUser(req.user) });
}

exports.signup = function(req, res, next) {
  const userName = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password'});
  }

  // check if a user with the given email exists
  User.findOne({ email: email }, (err, existingUser) => {
    if (err) {
      return next(err); 
    }

    // if a user with email exists, return and error
    if (existingUser) {
      return res.status(422).send({ 
        error: 'Email is in use'
      });
    }

    // if a user with email does not exist, create and save user record
    const user =  new User({
      user_name: userName,
      email: email, 
      password: password
    });

    user.save((err)=> {
      if (err) {
        return next(err)
      }; 
      res.json({ token: tokenForUser(user) });
    });

    // respond to request indicating that the user was created

  });
}