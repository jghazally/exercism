var UsedRobotNames  = [];

var Robot = function() {
	this.alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

	this.name = this.generateName();

};

Robot.prototype.generateName = function() {
	this.name = '';

	for ( var i = 0; i < 2; i++ ) {
		this.name += this.alpha.charAt(Math.floor(Math.random() * this.alpha.length));
	}

	this.name += Math.floor(Math.random() * 999);

	if ( UsedRobotNames[this.name] ) {
		return this.generateName();
	}

	UsedRobotNames[this.name] = true;
	return this.name;

};

Robot.prototype.reset = function() {
	this.generateName();
};

module.exports = Robot;
