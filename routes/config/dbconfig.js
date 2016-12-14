/**
 * http://usejsdoc.org/
 */
var config = function() {
	return {
		dev : {
			db : "mongodb://localhost/swaggerTest"
		},
		production : {
			db : "mongodb://localhost/swaggerTest"
		}
	};
};

module.exports = config();