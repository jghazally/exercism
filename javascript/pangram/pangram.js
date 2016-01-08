var Pangram = function(string) {
	this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
	this.string = string.toLowerCase();

	this.isPangram = function() {
		var isValidPangram = true;
		for ( var i = 0; i < this.alphabet.length; i++ ) {
			if ( this.string.indexOf(this.alphabet[i]) == -1 ) {
				isValidPangram = false;
				break;
			}
		}
		return isValidPangram;
	};
};

module.exports = Pangram;

