var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Create a variable that checks to see if you're connect to
// MongoLabs, otherwise save to the local database
var mongoUri = process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/usersdb';

console.log("connecting to mongoUri--> " + mongoUri);
// now use the mongoUri variable to connect
mongoose.connect(mongoUri);
var db = mongoose.connection;
// Need this for websocket
var app = express();
var server  = require('http').createServer(app);
// Need this for websocket
var io = require('socket.io')(server);
// =========================
// DB stuff
db.on("error", function(err){
  console.log("connection error: ", err);
  console.log("have you forgotten mongod??");
}); //will give error if no connect
db.once('connected',function(callback){
  console.log('connected to mongo');
});
//parse incoming json
app.use(bodyParser.json());
//bring in author routes
// users router
var usersRouter = require('./routes/users');
app.use('/users', usersRouter);
// audioClip router
var audioClipsRouter = require('./routes/audioClips');
app.use('/audioClips', audioClipsRouter);
// songersation router
var songersationsRouter = require('./routes/songersations');
app.use('/songersations', songersationsRouter);
var apiDataRouter = require('./routes/apiData');
app.use('/apiData', apiDataRouter);

// set the view engine to use ejs files
app.set('view engine', 'ejs');
// set the homepage to index.ejs
app.get('/',function(request,response){
  response.render('index');

  // response.json(audioClips);
});

// audioClipsRouter.get('/',function(request,response){
//   AudioClip.find({}, function(err,audioClips){
//     if(err) return console.log(err);
//     response.json(audioClips);
//   });
// });


// we will put css files in the public folder
app.use(express.static('public'));
// =============================
// for websocket
// makes the localhost:3000/ set to index.ejs

// for websocket
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
server.listen(3000, function(){
  console.log('listening on *:3000');
});

// don't use this for web sockets
// app.listen(3000, function(error){
// if (error) return console.log(error);
// console.log('success on connection'); });
// =============================
