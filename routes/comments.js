var express = require('express');
var commentsRouter = express.Router();
var bodyParser = require('body-parser'); //parses information from POST
var Comment = require('../models/comment');

//show all usersRouter route and function
commentsRouter.get('/',function(request,response){
  Comment.find({}, function(err,comments){
    console.log("comments is "+ comments);
    if(err) return console.log(err);
    response.json(comments);
  });
});

//Post a comment
commentsRouter.post('/', function (request,response) {
    console.log("consoling a comment post");
    console.log("request.body is " + request.body);
    console.log("request.body.comment is " + request.body.comment);
    var comment = new Comment({
      comment: request.body.comment,
      date: Date.now(),
      name: request.body.name
    });
    console.log("comment is " + comment);
    comment.save(function(err, comment ){
      if(err) {
        console.log(err);
        return;
      }
      else {
        console.log("comment is logged with: " + comment);
        response.redirect( '../audioClips' );
      }
    });
});

module.exports = commentsRouter;
