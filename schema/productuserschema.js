var mongoose = require('mongoose');

var productuserSchema = new mongoose.Schema({
	productName: String,
	productPrice:String,
	productQty:String,

});

module.exports = mongoose.model('puser', productuserSchema, 'pusers');

