var express = require('express'),
	http = require('http'),
	path = require('path'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	socketio = require("socket.io"),
	logger = require('morgan'),
	async = require('async'),
	favicon = require('serve-favicon'),
	bCrypt = require('bcrypt-nodejs'),
	util = require('util'),
	mongoose = require('mongoose'),
	passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	expressSession = require('express-session'),
	env = process.env.NODE_ENV = process.env.NODE_ENV || 'dev',
	swaggerJSDoc = require('swagger-jsdoc');

//config
var config = require('./routes/config/dbconfig')[env];

//model includes
require('./routes/data/pupies');

// mongoose
var db = require('./routes/config/mongooseconnection')(config);


var app = express();
var server = http.createServer(app);
var io = socketio.listen(server);
// all environments
// app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(cookieParser());

app.use(expressSession({
	secret: 'codingdefined',
	resave: false,
	saveUninitialized: true
}));


app.use('public', express.static(path.join(__dirname, 'public')));

// passport 
app.use(passport.initialize());
app.use(passport.session());
var swaggerDefinition = {
	info: {
		title: 'swagger api for Testing',
		version: '1.0.0',
		description: 'demonstrating how swagger works'
	},
	host: 'localhost:4000',
	basePath: '/'
};

var options = {
	swaggerDefinition: swaggerDefinition,
	apis: ['./routes/*.js']
};
var swaggerSpec = swaggerJSDoc(options);

app.get('/swagger.json', function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(swaggerSpec);
});

var index = require('./routes/indexRoute');
app.use('/', index);


if ('dev' == app.get('env')) {
	//app.use(express.errorHandler());
}



app.use(function (req, res, next) {
	var err = new Error('Requested Page Not Found!');
	err.status = 404;
	next(err);
});

app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: err
	});
});

//module  exports
module.exports = server;