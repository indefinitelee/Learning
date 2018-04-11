describe("Song", function() {
  var Song = require('../../lib/jasmine_examples/Song');
  var song;

  beforeEach(function() {
    song = new Song();
  });

	describe("When an artist has been set", function() {
		it("should tell us the artist", function () {
			song.setArtist('Lady Pank');

			expect(song.artist).toBe('Lady Pank')
		})

})
});