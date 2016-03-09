// schema for data for users register and login

var mongoose = require('mongoose');

module.exports = mongoose.Schema({
	email: String,
	password: String,
})