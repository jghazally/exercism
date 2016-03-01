var UsedRobotNames  = [];

var Robot = function() {
	this.alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	this.numeric = '1234567890';

	this.name = this.generateName();

};

Robot.prototype.generateName = function() {
	this.name = '';

	for ( var i = 0; i < 2; i++ ) {
		this.name += this.alpha.charAt(Math.floor(Math.random() * this.alpha.length));
	}

	for ( i = 0; i < 3; i++ ) {
		this.name += this.numeric.charAt(Math.floor(Math.random() * this.numeric.length));
	}

	if ( typeof UsedRobotNames[this.name] !== 'undefined' ) {
		return this.generateName();
	}

	UsedRobotNames[this.name] = true;
	return this.name;

};

Robot.prototype.reset = function() {
	this.generateName();
};

module.exports = Robot;
