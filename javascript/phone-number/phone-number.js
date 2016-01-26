var PhoneNumber = function(number) {

	this.raw = '0000000000';

	// Strip non int chars
	number = number.replace(/\D/g, '');

	// If length is ten
	if ( number.length === 10 ) {
		this.raw = number;
	}

	if (number.length === 11 && number[0] === '1' ) {
		this.raw = number.substring(1,11);
	}

	// Get Area Code
	this.areaCode = function() {
		return this.raw.substring(0,3);
	},

	this.number = function() {
		return this.raw;
	},

	this.toString = function() {
		return '(' + this.raw.substring(0,3) + ') ' + this.raw.substring(3,6) + '-' + this.raw.substring(6,10);
	}

};

module.exports = PhoneNumber;
