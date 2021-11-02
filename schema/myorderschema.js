var mongoose = require('mongoose');

var myorderSchema = new mongoose.Schema({
	cname: String,
	mobile: String,
	address: String,
	product: [
		{
			pname: String,
			pprice: String,
			pphoto: String,
			details: String,
		}
	]
});

module.exports = mongoose.model('myorder', myorderSchema, 'myorders');





