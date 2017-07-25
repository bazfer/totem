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

// FOR QUICK SERVER SIDE TESTING
// const User = require('./models/user');
// const Totem = require('./models/totem');
// const Block = require('./models/block');
// const Protoblock = require('./models/Protoblock'); 

// var proto001 = {
//     name: 'Heyoka',
//     series: 'Alpha',
//     image_URL: 'protoblock-001.jpg',
//     weight: 1000,
//     isReleased: false
// }

// Protoblock.create(proto001);

// var x = {
// 	user_name: "fernando",
// 	email: "bazfer@gmail.com",
// 	password: "fb",
// 	recent_totem: 0,
// 	isRunning: false,
// 	totems: new Array
// }

// User.create(x)

     
 
