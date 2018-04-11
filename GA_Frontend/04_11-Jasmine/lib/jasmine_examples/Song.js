function Song() {

}

Song.prototype.setArtist = function(artist) {
	this.artist = artist
};

Song.prototype.persistFavoriteStatus = function(value) {
  // something complicated
  throw new Error("not yet implemented");
};

Song.prototype.billboardRank = Math.floor(Math.random() * 100)

module.exports = Song;
