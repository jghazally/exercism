var ETL = function() { };

ETL.prototype.transform = function (old) {
	var clean = {};
	for ( var score in old ) {
		for ( var i in old[score] ) {
			clean[old[score][i].toLowerCase()] = parseInt(score, 10);
		}
	}
	return clean;
};

module.exports = ETL;
