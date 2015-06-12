var wordCount = function(word) {
	// Split word by spaces
	var array = word.trim().split(/\s+/);

	// Store results
	var results = {};

	// Loop through array
	for (var i = 0; i < array.length; i++) {
		if ( typeof results[array[i]] !== 'function' && typeof results[array[i]] !== 'undefined' ) {
			results[array[i]]++;
		} else {
			results[array[i]] = 1;
		}
	}

	return results;
};

module.exports = wordCount;
