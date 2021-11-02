var mongoose=require('mongoose');

var vendorSchema = new mongoose.Schema({
	vendorname:String,
	email:String,
	password:String,
	mobile:String,	
});

module.exports = mongoose.model('vendor', vendorSchema, 'vendors');
