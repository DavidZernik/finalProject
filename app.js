var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost/usersdb');
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

// set the view engine to use ejs files
app.set('view engine', 'ejs');
// set the homepage to index.ejs
app.get('/',function(request,response){
  response.render('index');
});
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
