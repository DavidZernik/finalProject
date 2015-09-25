var express = require('express');
var apiDataRouter = express.Router();
var bodyParser = require('body-parser'); //parses information from POST
var AudioClip = require('../models/audioClip');

//show all audioClips route and function
apiDataRouter.get('/',function(request,response){
  AudioClip.find({}, function(err,audioClips){
    if(err) return console.log(err);
    response.json(audioClips);
  });
});

apiDataRouter.get('/:id', function(request, response){
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

module.exports = apiDataRouter;
