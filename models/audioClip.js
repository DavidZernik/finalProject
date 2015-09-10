var mongoose = require('mongoose');

var AudioClipSchema = mongoose.Schema({


  // an array of the 4 sounds in the clip
  audioClip:{type: Array},
  // where the audioClip is in the songersation
  clipLocation:{type:Number}
});

var AudioClip = mongoose.model("AudioClip",AudioClipSchema);

module.exports = AudioClip;
