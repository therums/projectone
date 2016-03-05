// schema for data for users register and login

var mongoose = require('mongoose');

module.exports = mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	password: String,
})