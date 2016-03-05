var mongoose = require('mongoose');

// for blog database
module.exports = mongoose.Schema({
	title: String,
	blog: String,
	timeStamp: String,
	img: String
})