var mongoose = require('mongoose');

var userSchema = require('../models/user');

function getUsers(db, callback) {
	console.log('Im alive')
	var userModel = mongoose.model('User', userSchema)
	userModel.find(function (err, res) {
		if (err) console.log('error occurred', err)
			console.log('finished reading databse')
		callback(err, res)
	})
}

function saveUser(db, userForDB, callback) {
	console.log('started the save process')
	var userModel = mongoose.model('User', userSchema)
	userForDB = new userModel(userForDB)

	userForDB.save(function (err, res) {
		if (err) 
			return console.log('there is an error', err)
		callback(err, res)
	})
}

module.exports = {
	"getUsers": getUsers,
	"saveUser": saveUser
}