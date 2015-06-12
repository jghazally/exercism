//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
	var output = 'Fine. Be that way!';

	if ( input.match(/\S/) ) {
		output = 'Whatever.';

		// If the string ends with a ?
		// means they are askig a question
		if ( input.substr(input.length-1, input.length) == '?' ) {
			output = 'Sure.';
		}

		// If the string matches to uppercase 
		// or containrs no alpha characters
		// means they are yelling
		if ( input === input.toUpperCase()  && input.match(/[a-z]/i) ) {
			output = 'Whoa, chill out!';
		}

	}
	return output;
};

module.exports = Bob;
