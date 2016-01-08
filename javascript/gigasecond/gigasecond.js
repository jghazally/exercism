module.exports = function(date) {
	this.givenDate = date;

	this.date = function() {
		if ( typeof this.computedDate === 'undefined' ) {
			this.computedDate = new Date(this.givenDate.setSeconds(this.givenDate.getSeconds() + Math.pow(10,9)));
		}

		return this.computedDate;
	};
};
