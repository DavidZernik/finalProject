var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');
var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };
var mongodbUri = 'mongodb://heroku_xdqwhpb1:tbgd57fn53ce60prh1n6q3fbij@ds051843.mongolab.com:51843/heroku_xdqwhpb1';
var mongooseUri = uriUtil.formatMongoose(mongodbUri);
mongoose.connect(mongooseUri, options);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var CommentSchema = mongoose.Schema({
  name:{type: String},
  comment:{type: String},
  date:{type: Date, default: Date.now}
});

db.once('open', function callback () {
  var CommentSchema = mongoose.Schema({
    name:{type: String},
    comment:{type: String},
    date:{type: Date, default: Date.now}
  });
});

var Comment = mongoose.model("Comment",CommentSchema);

module.exports = Comment;
