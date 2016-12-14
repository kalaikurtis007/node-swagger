var debug = require('debug')('Start');
var port = process.env.PORT ||4000;
var serverAddress = process.env.IP || '0.0.0.0';
var app = require('../app');
var server = app.listen(port, serverAddress, function() {
	var addr = server.address();	
	console.log("Server started on address" + addr.address + ":" + addr.port ||4000);
});