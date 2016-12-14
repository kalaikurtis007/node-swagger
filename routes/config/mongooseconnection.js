var mongoose = require('mongoose');
module.exports = function(config) {
	mongoose.connect(config.db);
	var db = mongoose.connection;
	db.on('error', function() {
		console.log("connection error");
	}).on('open', function() {
		console.log("Connection is Open");
	});
	return db;
};