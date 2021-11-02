var express = require('express');
var router = express.Router();
var ProductModel = require('../schema/productschema');
var mongoose = require('mongoose');

router.get('/products', function (req, res, next) {
    ProductModel.find(function (err, data) {
        if (err) {
            console.error(err);
        } else {
            res.send(data);
        }
    });
});

router.post('/product', function (req, res, next) {
    var newProduct = new ProductModel();
    newProduct.pname = req.body.pname;
    newProduct.pprice = req.body.pprice;
    newProduct.pphoto = req.body.pphoto;
    newProduct.details = req.body.details;

    console.log(req)

    newProduct.save(function (err, data) {
        if (err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});

router.delete('/product/:id', function (req, res, next) {
    var objectId = mongoose.Types.ObjectId(req.params.id);
    console.log(objectId, req.params.id)
    BookModel.deleteOne({ _id: objectId },
        function (err, data) {
            if (err) {
                console.error(err);
            } else {
                res.send(data);
            }
        });
});



module.exports = router;
