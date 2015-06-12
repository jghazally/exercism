var Ham = function(){};

Ham.compute = function(strandA, strandB) {
	// The ham number
	var hamCount = 0;

	// If strands do not equal in length we cannot compute
	if ( strandA.length != strandB.length ) {
		throw "DNA strands must be of equal length.";
	}

	// Loop through one string and check them both at i
	for ( var i = 0; i < strandA.length; i++ ) {
		if ( strandA.charAt(i) != strandB.charAt(i) ) {
			hamCount++;
		}
	}

	return hamCount;
};

module.exports = Ham;
