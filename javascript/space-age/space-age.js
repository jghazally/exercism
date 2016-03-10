var SpaceAge = function(seconds) {
	this.seconds = seconds;

	this.planets = {
		Earth: 365.25,
		Mercury: 0.2408467,
		Venus: 0.61519726,
		Mars: 1.8808158,
		Jupiter: 11.862615,
		Saturn: 29.447498,
		Uranus: 84.016846,
		Neptune: 164.79132
	};

	this.onEarth = function() { return this.convertYears('Earth'); };
	this.onMercury = function() { return this.convertYears('Mercury'); };
	this.onVenus = function() { return this.convertYears('Venus'); };
	this.onMars = function() { return this.convertYears('Mars'); };
	this.onJupiter = function() { return this.convertYears('Jupiter'); };
	this.onSaturn = function() { return this.convertYears('Saturn'); };
	this.onUranus = function() { return this.convertYears('Uranus'); };
	this.onNeptune = function() { return this.convertYears('Neptune'); };

	this.convertYears = function(planet) {
		if ( planet != 'Earth' ) {
			var earthYears = this.seconds / (this.planets.Earth * 86400);
			return Number(parseFloat(earthYears/this.planets[planet]).toFixed(2));
		} else {
			return Number(parseFloat(this.seconds / (this.planets[planet] * 86400)).toFixed(2));
		}
	};

};

module.exports = SpaceAge;
