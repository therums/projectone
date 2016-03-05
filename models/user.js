// schema for data

var mongoose = require('mongoose');

module.exports = mongoose.Schema({
	title: String,
	blog: String,
	timeStamp: String,
	img: String
})