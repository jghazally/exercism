module.exports = function(date) {
	var isLeapYear = false;
	if ( date % 4 === 0 ) {
		isLeapYear = true;
	}

	if ( isLeapYear && date % 100 === 0 ) {
		isLeapYear = false;
	}

	if ( !isLeapYear && date % 400 === 0 ) {
		isLeapYear = true;
	}

	return isLeapYear;
};
