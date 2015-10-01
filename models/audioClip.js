var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');
var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };
var mongodbUri = 'mongodb://heroku_xdqwhpb1:tbgd57fn53ce60prh1n6q3fbij@ds051843.mongolab.com:51843/heroku_xdqwhpb1';
var mongooseUri = uriUtil.formatMongoose(mongodbUri);
mongoose.connect(mongooseUri, options);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var AudioClipSchema = mongoose.Schema({
// an array of the 4 sounds in the clip
audioClip:{type: Array},
});

db.once('open', function callback () {
  var AudioClipSchema = mongoose.Schema({
  // an array of the 4 sounds in the clip
  audioClip:{type: Array},
  });
});

var AudioClip = mongoose.model("AudioClip",AudioClipSchema);

module.exports = AudioClip;
