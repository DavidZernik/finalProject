var express = require('express');
var usersRouter = express.Router();
var bodyParser = require('body-parser'); //parses information from POST
var User = require('../models/user');

//show all usersRouter route and function
usersRouter.get('/',function(request,response){
  User.find({}, function(err,users){
    if(err) return console.log(err);
    response.json(users);
  });
});

//Post a user
usersRouter.post('/', function (request,response) {
  User.create(request.body, function (err, newUser) {
    if(err) return console.log(err);
    response.json(newUser);
  });
});

usersRouter.get('/:id', function(request, response){
  User.findOne({_id: request.params.id}, function(err,user){
    if(err) {
      console.log(err);
      return
    } else {
      console.log(user);
      response.json(user);
    }
  });
});

module.exports = usersRouter;
