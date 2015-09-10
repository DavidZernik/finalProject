var express = require('express');
var audioClipsRouter = express.Router();
var bodyParser = require('body-parser'); //parses information from POST
var AudioClip = require('../models/audioClip');

//show all usersRouter route and function
audioClipsRouter.get('/',function(request,response){
  AudioClip.find({}, function(err,audioClips){
    if(err) return console.log(err);
    response.json(audioClips);
  });
});

//Post a user
audioClipsRouter.post('/', function (request,response) {
  // AudioClip.create(request.body, function (err, newAudioClip) {
  //   if(err) return console.log(err);
  //   // call to db
  //   response.json(newAudioClip);
  // });
  response.json({message: 'pinnnnnng'});
});

audioClipsRouter.get('/:id', function(request, response){
  AudioClip.findOne({_id: request.params.id}, function(err,audioClip){
    if(err) {
      console.log(err);
      return
    } else {
      console.log(user);
      response.json(audioClip);
    }
  });
});

module.exports = audioClipsRouter;
