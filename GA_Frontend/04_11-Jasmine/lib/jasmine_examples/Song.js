function Song() {
}

Song.prototype.setArtist = function(artist) {
	this.artist = artist
};

Song.prototype.persistFavoriteStatus = function(value) {
  // something complicated
  throw new Error("not yet implemented");
};

module.exports = Song;
