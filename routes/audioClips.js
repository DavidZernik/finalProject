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

//Post an audioClip
audioClipsRouter.post('/', function (request,response) {
    console.log("hello post");
    console.log("request.body is " + request.body.constructor);
    var audioClip = new AudioClip({audioClip: request.body});
    console.log("audioClip is " + audioClip);
    audioClip.save(function(err, audioClip ){
      if(err) {
        console.log(err);
        return
      }
      else {
        console.log("audioClip is " + audioClip);
        response.json({message: 'pinnnnnng'});
      }
    });
});

audioClipsRouter.get('/:id', function(request, response){
  AudioClip.findOne({_id: request.params.id}, function(err,audioClip){
    if(err) {
      console.log(err);
      return
    } else {
      console.log(audioClip);
      response.json(audioClip);
    }
  });
});

module.exports = audioClipsRouter;
