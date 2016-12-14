
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pupiesSchema = new mongoose.Schema({
	pupiesid:Number,
	pupiesname: { type: String, required: true, unique: true },
	breed:String,
	age:Number,
	sex:String,
	status:String,
	CDate:{type:Date,default:Date.now},
	CreatedBy:String,
	CreatedDate: {type: Date, default: Date.now}
});
mongoose.model('pupies', pupiesSchema);