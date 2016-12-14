var IndexCtrl = function () {
	var IndexCall = function (req, res) {		
		var obj = {
			title: "Welcome to Node WebSockets",
			message: "testing"
		};
		res.render("index", obj);

	};
	return {
		index: IndexCall
	};
};
module.exports = IndexCtrl();