describe("Song", function() {
  var Song = require('../../lib/jasmine_examples/Song');
  var song;

  beforeEach(function() {
    song = new Song();
  });

		it ("should have a billboard rank between 1 and 100", function() {
		

		expect(song.billboardRank).toBeLessThanOrEqual(100);
	});

	describe("When an artist has been set", function() {
		it("should tell us the artist", function () {
			song.setArtist('Lady Pank');

			expect(song.artist).toBe('Lady Pank')
		})

	});

});