var FoodChain = function() {
	start = "I know an old lady who swallowed a ";
	end = "I don't know why she swallowed the fly. Perhaps she'll die.";

	verses = [
		{"name": "fly"},
		{"name": "spider",
			"post": " that wriggled and jiggled and tickled inside her"},
		{"name": "bird",
			"pre": "How absurd to swallow a bird!"},
		{"name": "cat",
			"pre": "Imagine that, to swallow a cat!"},
		{"name": "dog",
			"pre": "What a hog, to swallow a dog!"},
		{"name": "goat",
			"pre": "Just opened her throat and swallowed a goat!"},
		{"name": "cow",
			"pre": "I don't know how she swallowed a cow!"},
		{"name": "horse",
			"end": "She's dead, of course!"}
	];
};

FoodChain.prototype.verses = function(verse1, verse2) {
	output = '';
	for ( verse1; verse1 <= verse2; verse1++ ) {
		output += this.verse(verse1);
		output += '\n';
	}
	return output;
};

FoodChain.prototype.verse = function(verse) {
	verse = verse -1;
	output = [];
	output.push(start);
	for ( var i = verse; i >= 0; --i ) {
		if ( i == verse ) {
			output.push(verses[i].name + '.\n');
			if ( typeof verses[i].pre != "undefined" ) {
				output.push(verses[i].pre + '\n');
			}
		}

		if ( typeof verses[i].end != 'undefined' ) {
			output.push( verses[i].end + '\n');
			return output.join('');
		}

		if ( verse - 1 === 0  && i > 0) {
			output.push('It wriggled and jiggled and tickled inside her.\n');
		}

		if ( i > 0 ) {
			output.push("She swallowed the " + verses[i].name + " to catch the " + verses[i-1].name);
			if ( typeof verses[i-1].post !== "undefined" ) {
				output.push(verses[i-1].post + '.\n');
			} else {
				output.push('.\n');
			}
		}

	}

	output.push(end + '\n');
	return output.join('');
};

module.exports = FoodChain;
