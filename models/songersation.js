var mongoose = require('mongoose');

var SongersationSchema = mongoose.Schema({

   //  an array of the audioClips
   listOfClips: [{type:mongoose.Schema.Types.ObjectId, ref:'audioClip'}]
   });

var Songersation = mongoose.model("Songersation", SongersationSchema);

module.exports = Songersation;
