const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin =  passport.authenticate('local', { session: false });

// Models
const User = require('./models/user');
const Totem = require('./models/totem');
const Block = require('./models/block');
const Protoblock = require('./models/Protoblock');

// TESTING PURPOSES
const pb1 = {

};

const b1 = {
  status: 'active',
  time: 123,
  notes: ['do I need a "notes" model?'],
  milestone: false,
  isBase: true,
  isCrown: false,
};

const b2 = {
  status: 'closed',
  time: 123,
  notes: 'test test test',
  milestone: false,
  isBase: true,
  isCrown: false,
};

const t2 = {
  title: 'Learn to Skate',
  block_count: 0,
  pixel_height: 0,
  time_total: 0,
  completed: false,
  blocks: [ b2 ]
};

const t1 = {
  title: 'Learn to Etch',
  block_count: 4,
  pixel_height: 120,
  time_total: 120,
  completed: false,
  blocks: [ b1 ]
};

const u1 = new User({
  user_name: 'Du',
  email: 'fu@fi.com',
  password: 'du',
  totems: [ t1 ]
});

module.exports = (app) => {
  // AUTHENTICATION
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
  app.get('/', requireAuth, function(req, res) {
    // the user data has been attached to the req in requireAuth
    // in here we just extract it from the req
    // and send it to the client to be rendered
    // console.log(req.user);
    let user = req.user;
    res.send(user);
  });

  // API
  // All requests assume knowledge of User, as it is passed to the client immediately after
  // authentication

  // Find one User 
  app.get('/find_user', function(req, res) {
    let id = req.headers._id;
    User.findOne({ _id: id })
      .then((data) => {
        res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status('Error: ' + err);
    })
  });

  // Find one Totem
  app.get('/find_totem', function(req, res) {
    let totem = req.headers.totem_index;
    let id = req.headers._id;
    User.findOne({ _id: id })
      .then((data) => {
        res.json(data.totems[totem]);
    })
    .catch((err) => {
      console.log(err);
      res.status('Error: ' + err);
    })
  });

  // Find one Block
  app.get('/find_block', function(req, res) {
    let totem = req.headers.totem_index;
    let block = req.headers.block_index;
    let id = req.headers._id;
    User.findOne({ _id: id })
      .then((data) => {
        res.json(data.totems[totem].blocks[block]);
    })
    .catch((err) => {
      console.log(err);
      res.status('Error: ' + err);
    })
  });

  // Insert a Totem
  app.put('/insert_totem', function(req, res) {
    let totem = req.body;
    let id = req.headers._id;
    User.findOneAndUpdate(
      { _id: id }, 
      { $push: { totems: totem }},
      { new: true },
      function(err, user) {
        if(err) {
          console.log(err);
          res.status(err);
        }
        res.json(user);
      }
    );
  });
    
  app.post('/insert_block', function(req, res) {
    let totem = req.headers.totem_index;  
    let block = req.body;
    let id = req.headers._id;
    User.findOne({ _id: id })
      .then((user) => {
        user.totems[totem].blocks.push(block);
        return user.save();
      })
      .then((data) => {
        res.json(data.totems[totem].blocks);
      })
    .catch((err) => {
      console.log(err);
      res.status('Error: ' + err);
    })
  });

  // Delete a Totem
  app.all('/delete_totem', function(req, res) {
    let totem = req.headers.totem_index;
    let id = req.headers._id;
    User.findOne({ _id: id })
      .then((user) => {
        let totem_id = user.totems[totem]._id;
        user.totems.pull({ _id: totem_id });
        return user.save();
      })
      .then((data) => {
        res.json(data.totems);
      })
    .catch((err) => {
      console.log(err);
      res.status('Error: ' + err);
    })
  });
  
  // Delete a Block
  app.all('/delete_block', function(req, res) {
    let totem = req.headers.totem_index;
    let block = req.headers.block_index;
    let id = req.headers._id;
    User.findOne({ _id: id })
      .then((user) => {
        let block_id = user.totems[totem].blocks[block]._id;
        user.totems[totem].blocks.pull({ _id: block_id });
        return user.save();
      })
      .then((data) => {
        res.json(data.totems[totem].blocks);
      })
    .catch((err) => {
      console.log(err);
      res.status('Error: ' + err);
    });
  });

}


