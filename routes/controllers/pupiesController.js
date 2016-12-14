var mongoose = require('mongoose');
var pupies = mongoose.model('pupies');
var pupiesServiceCtrl = function () {
	var pupiesServiceCall = function (req, res) {
		pupies.findOne({
			pupiesid: (+req.params.id),
			status: 'Active'
		}, function (err, pupie) {
			if (err)
				throw err;
			res.send({
				"status": "success",
				"pupies_data": pupie
			});

		});
	};
	var pupiesCreateServiceCall = function (req, res) {

		var pup = new pupies(req.query);
		pup.save(function (err) {
			if (err)
				throw err;
		});
		res.send({
			"status": "success",
			"pupies_data": pup
		});
	};

	var pupiesGetAll = function (req, res) {
		pupies.find({
			status: "Active"
		}, function (err, pupie) {
			if (err)
				throw err;
			res.send({
				"status": "success",
				"pupies_data": pupie
			});
		});
	};
	var pupiesDeleteServiceCall = function (req, res) {
		pupies.update({
			status: 'Active',
			pupiesid: (+req.params.id)
		}, {
			status: 'Deactive'
		}, function (err, pupie) {
			if (err)
				throw err;
			res.send({
				"status": "successfully deleted!..",
				"pupies_data": pupie
			});

		});
	};
	var pupiesUpdateServiceCall = function (req, res) {
		pupies.update({
			pupiesid: (+req.params.id)
		}, req.query, function (err, pupie) {
			if (err)
				throw err;
			res.send({
				"status": "successfully deleted!..",
				"pupies_data": pupie
			});

		});
	};
	return {
		getpup: pupiesServiceCall,
		getall: pupiesGetAll,
		add: pupiesCreateServiceCall,
		deletepup: pupiesDeleteServiceCall,
		updatepup: pupiesUpdateServiceCall
	};
};
module.exports = pupiesServiceCtrl();