var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(input) {
	var map = {
		'G' : 'C',
		'C' : 'G',
		'T' : 'A',
		'A' : 'U'
	};
	var output = '';
	for ( var i = 0; i < input.length; i++ ) {
		output += map[input[i]];
	}
	return output;
};

DnaTranscriber.prototype.toDna = function(input) {
	var map = {
		'G' : 'C',
		'C' : 'G',
		'U' : 'A',
		'A' : 'T'
	};
	var output = '';
	for ( var i = 0; i < input.length; i++ ) {
		output += map[input[i]];
	}
	return output;
};

module.exports = DnaTranscriber;
