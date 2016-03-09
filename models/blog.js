var mongoose = require('mongoose');

// for blog database
module.exports = mongoose.Schema({
	title: String,
	words: String,
})