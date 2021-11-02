var mongoose=require('mongoose');

var productSchema = new mongoose.Schema({
	pname:String,
	pprice:String,
	pphoto:String,
	details:String,	
	
});

module.exports = mongoose.model('product', productSchema, 'products');




 