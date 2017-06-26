// main starting point of app
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose =  require('mongoose');
const cors = require('cors');

// db setup
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:totem/totem');

// app setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*'}));
router(app);

// server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port); 

// LEARNING MONGOOSE
// const User = require('./models/user');
// const Totem = require('./models/totem');
// const Block = require('./models/block');
// const Protoblock = require('./models/Protoblock'); 

// const b2 = {
//   status: 'closed',
//   time: 123,
//   notes: 'test test test',
//   milestone: false,
//   isBase: true,
//   isCrown: false,
// };

// const t2 = {
//   title: 'Learn to Skate',
//   block_count: 0,
//   pixel_height: 0,
//   time_total: 0,
//   completed: false,
//   blocks: [ b2 ]
// };

    
    // User.findOne({ _id: "5950366744e13c5d870d9069" })
    //   .then((user) => {
    //   user.totems.push(t2);
    //   return user.save();
    // })

    // User.findOneAndUpdate(
    //   { _id: "5950366744e13c5d870d9069" }, 
    //   { $push: { totems: t2 }},
    //   { new: true },
    //   function(err, doc) {
    //     if(err) {
    //       console.log(err);
    //     }
    //     console.log(doc);
    //   }
    // )



//     Cat.findOneAndUpdate({age: 17}, {$set:{name:"Naomi"}}, {new: true}, function(err, doc){
//     if(err){
//         console.log("Something wrong when updating data!");
//     }

//     db.students.update(
//    { _id: 1 },
//    { $push: { scores: 89 } }
// )
     
 