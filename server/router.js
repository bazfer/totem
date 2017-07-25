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

module.exports = (app) => {
  // AUTHENTICATION
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
  app.get('/', requireAuth, function(req, res) {
    // extract user data from req and send it to the client
    
    let user = req.user;
    console.log(user)
    res.send(user);
  });

  // API
  // All requests assume knowledge of User, as it is passed to the client immediately after
  // authentication

  // Find one User 
  app.get('/find_user', requireAuth, function(req, res) {
    let id = req.user._id;
    User.findOne({ _id: id })
      .then((data) => {
        
        res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status('Error: ' + err);
    });
  });

  // Find one Totem
  app.get('/totems/:', requireAuth, function(req, res) {
    let totem = req.headers.totem_index;
    let id = req.user._id;
    User.findOne({ _id: id })
      .then((data) => {
        res.json(data.totems[totem]);
    })
    .catch((err) => {
      console.log(err);
      res.status('Error: ' + err);
    });
  });

  // Find one Block
  app.get('/find_block', requireAuth, function(req, res) {
    let totem = req.headers.totem_index;
    let block = req.headers.block_index;
    let id = req.user._id;
    
    User.findOne({ _id: id })
      .then((data) => {
        res.json(data.totems[totem].blocks[block]);
    })
    .catch((err) => {
      console.log(err);
      res.status('Error: ' + err);
    });
  });

  // Insert a Totem
  // app.put('/insert_totem', function(req, res) {
  //   let totem = req.body;
  //   let id = req.headers._id;
  //   User.findOneAndUpdate(
  //     { _id: id }, 
  //     { $push: { totems: totem }},
  //     { new: true },
  //     function(err, user) {
  //       if(err) {
  //         console.log(err);
  //         res.status(err);
  //       }
  //       res.json(user);
  //     }
  //   );
  // });

  app.post('/insert_totem', requireAuth, function(req, res) {
    // only data provided by client to insert a totem
    // all other fields should have defaults
    // compose totem
    const totem = {
      title: req.body.title,
      block_count: 0,
      pixel_height: 0,
      time_total: 0,
      completed: false,
      blocks: []
    };
    
    // user id
    let id = req.user._id;

    // query
    User.findOne({ _id: id })
      .then((user) => {
        user.totems.push(totem);
        user.recent_totem = user.totems.length-1;
        return user.save();
      })
      .then(() => User.findOne({ _id: id })
      .then((data) => {
        // update recent_totem to enwly created totem
        res.json(data);
      }))
    .catch((err) => {
      console.log(err);
    });
  });
  
  // Create a Block
  app.post('/insert_block', requireAuth, function(req, res) {
    const block = {
      status: 'running',
      time: 0,
      notes: '',
      milestone: false,
      isCrown: false,
      isBase: false,
      protoblock: "594aa2d9c122f312ecdbb144"
    }
    
    let totem = req.body.active_totem;  
    let id = req.user._id;
    User.findOne({ _id: id })
      .then((user) => {
        // if stopwatch is not running, start running it
        // if(user.isRunning === false) {
          user.totems[totem].blocks.push(block);
          user.recent_totem = totem;
          user.isRunning = true;
        return user.save();
        // }
      })
      .then(() => User.findOne({ _id: id })
      .then((data) => {
        // console.log("DATA")
        // console.log(data);
        res.json(data);
      }))
    .catch((err) => {
      console.log(err);
    });
  });

  // Stop a Block
  app.put('/stop_block', requireAuth, function(req, res) {
    let id = req.user._id;
    User.findOne({ _id: id })
      .then((user) => {
        
        // stop stopwatch
        user.isRunning = false;
        // calc final block time
        return user.save();
      })
      .then(() => User.findOne({ _id: id })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
      })
    )
  })


  // Delete a Totem
  app.delete('/delete_totem', requireAuth, function(req, res) {
    let totem = req.body.id;
    let id = req.user._id;
    User.findOne({ _id: id })
      .then((user) => {
        let totem_id = user.totems[totem]._id;
        user.totems.pull({ _id: totem_id });
        user.recent_totem = user.totems.length-1;
        console.log(user.recent_totem);
        return user.save();
      })
      .then(() => User.findOne({ _id: id })
      .then((data) => {
        res.json(data);
      }))
    .catch((err) => {
      console.log(err);
      res.status('Error: ' + err);
    });
  });
  
  // Delete a Block
  app.all('/delete_block', requireAuth, function(req, res) {
    let totem = req.headers.totem_index;
    let block = req.headers.block_index;
    let id = req.user._id;
    User.findOne({ _id: id })
      .then((user) => {
        let block_id = user.totems[totem].blocks[block]._id;
        user.totems[totem].blocks.pull({ _id: block_id });
        return user.save();
      })
      .then(() => User.findOne({ _id: id })
      .then((data) => {
        res.json(data.totems[totem].blocks);
      }))
    .catch((err) => {
      console.log(err);
      res.status('Error: ' + err);
    });
  });
}



