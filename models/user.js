var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  AudioClips:[Array],
  audioClipsAuthored:[Array]
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
