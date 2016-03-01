var School = function() {
	this.rosterDB = {};
};

School.prototype.roster = function() {
	return this.rosterDB;
};

School.prototype.add = function(student, grade) {
	if ( typeof this.rosterDB[grade] == 'undefined' ) {
		this.rosterDB[grade] = [];
	}

	this.rosterDB[grade].push(student);
	this.rosterDB[grade].sort();
};

School.prototype.grade = function(grade) {
	if ( typeof this.rosterDB[grade] == 'undefined' ) {
		this.rosterDB[grade] = [];
	}

	return this.rosterDB[grade];
};


module.exports = School;
