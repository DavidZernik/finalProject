var express = require('express');
var audioClipsRouter = express.Router();
var bodyParser = require('body-parser'); //parses information from POST
var AudioClip = require('../models/audioClip');

//show all usersRouter route and function
audioClipsRouter.get('/',function(request,response){
  AudioClip.find({}, function(err,audioClips){
    console.log("audioClips is "+ audioClips);
    if(err) return console.log(err);
    // *****this line of code is taking the data from the audioClip model and posting it to the showClips.ejs view******
    response.render('showClips.ejs', { results: audioClips });
        // response.render('showClips.ejs', {title: 'stratus1234'});
    // response.json(audioClips);
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

// delete individual audioclip
audioClipsRouter.post('/:id/delete', function(request, response){
  AudioClip.findOneAndRemove({_id: request.params.id}, function(err, audioClip){
    if(err) {
      console.log(err);
      return
    } else {
      console.log(audioClip);
      // response.json({'message': 'deleted audioclip'+ request.params.id});
      response.redirect('/audioclips');
    }
  });
});




module.exports = audioClipsRouter;
