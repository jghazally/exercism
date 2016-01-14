var BeerSong = function() {

	this.verse = function(verse) {
		var output = '';
		var numBottles = verse + ' bottles';
		var numRemainingBottles = (verse -1) + ' bottles';
		var remainingBottles = 'Take one down and pass it around, ' + (verse - 1) + ' bottles';

		if ( verse === 1 ) {
			numBottles = '1 bottle';
			remainingBottles = 'Take it down and pass it around, no more bottles';
		}

		if ( verse === 2 ) {
			remainingBottles = 'Take one down and pass it around, 1 bottle';
		}

		if ( verse === 0 ) {
			numBottles = 'No more bottles';
			remainingBottles = 'Go to the store and buy some more, 99 bottles';
		}

		output += numBottles + ' of beer on the wall, ' + numBottles.toLowerCase() + ' of beer.\n' + remainingBottles + ' of beer on the wall.\n';

		return output;
	};

	this.sing = function(start, end) {
		var output = '';

		if ( typeof end === 'undefined' ) {
			end = -1;
		} else {
			end--;
		}

		for ( start; start > end; start--  ) {
			output += this.verse(start);
			if ( (start - 1) > end ) {
				output += '\n';
			}
		}

		return output;
	};
};

module.exports = BeerSong;
