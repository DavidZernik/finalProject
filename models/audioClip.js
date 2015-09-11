var mongoose = require('mongoose');

var AudioClipSchema = mongoose.Schema({
  // an array of the 4 sounds in the clip
  audioClip:{type: Array},
});

var AudioClip = mongoose.model("AudioClip",AudioClipSchema);

module.exports = AudioClip;
