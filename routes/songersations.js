var express = require('express');
var songersationsRouter = express.Router();
var bodyParser = require('body-parser'); //parses information from POST
var Songersation = require('../models/songersation');

//show all the songersations that exist
songersationsRouter.get('/',function(request,response){
  Songersation.find({}, function(err,songersations){
    if(err) return console.log(err);
    response.json(songersations);
  });
});
//Post a songersation
songersationsRouter.post('/', function (request,response) {
  Songersation.create(request.body, function (err, newSongersation) {
    if(err) return console.log(err);
    response.json(newSongersation);
  });
});
module.exports = songersationsRouter;
