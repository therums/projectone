var mongoose = require('mongoose');

var userSchema = require('../models/blog');


function writeToBlog(db, callback) {
	console.log('written')
	var userModel = mongoose.model('Blog', userSchema)
	userModel.find(function (err, res) {
		if (err) console.log('getUser error occurred', err)
			console.log('reading databse')
		callback(err, res)
	})
}

function saveBlog(db, userForDB, callback) {
	console.log('save blog')
	var userModel = mongoose.model('Blog', userSchema)
	saveDB = new userModel(saveDB)
	userForDB.save(function (err, res) {
		if (err) 
			return console.log('save blog error', err)
		callback(err, res)
	})
}

module.exports = {
	"writeToBlog": writeToBlog,
	"saveBlog": saveBlog
}