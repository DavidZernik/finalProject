var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');
var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };
var mongodbUri = 'mongodb://heroku_4kx3zn0z:r6stgag0as6o9smig551un0vft@ds051843.mongolab.com:51843/heroku_4kx3zn0z';
var mongooseUri = uriUtil.formatMongoose(mongodbUri);
mongoose.connect(mongooseUri, options);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback () {
  var AudioClipSchema = mongoose.Schema({
  // an array of the 4 sounds in the clip
  audioClip:{type: Array},
  });
});

var AudioClip = mongoose.model("AudioClip",AudioClipSchema);

module.exports = AudioClip;
