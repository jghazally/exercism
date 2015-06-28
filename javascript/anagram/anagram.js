var Anagram = function(word) {

	this.word= word;

	this.makeArguments = function(args) {
		var list = [];

		for ( var i = 0; i < args.length; i++ ) {
			if ( typeof args[i] == 'string' ) {
				list.push(args[i]);
			} else {
				for ( var j = 0; j < args[i].length; j++ ) {
					list.push(args[i][j]);
				}
			}
		}
		return list;
	};

	this.matches = function() {
		list = makeArguments(arguments);

		var matchList = [];
		var wordCount = 0;
		var sortedWord = this.word.toLowerCase().split('').sort();

		// For each word
		for ( var i = 0; i < list.length; i++ ) {
			wordCount = 0;
			var sortedListWord = list[i].toLowerCase().split('').sort();

			// If the words dont match
			if ( this.word.toLowerCase() === list[i].toLowerCase() ) {
				continue;
			}

			// For each character
			for ( var j = 0; j < sortedWord.length; j++ ) {
				if ( sortedWord[j] === sortedListWord[j] ) {
					wordCount++;
				}
			}

			// If characers match in the word
			if ( wordCount === sortedWord.length && this.word.toLowerCase().length === list[i].toLowerCase().length) {
				matchList.push(list[i]);
			}
		}

		return matchList;
	};

	return this;
};

module.exports = Anagram;
