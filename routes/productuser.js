var express = require('express');
var router = express.Router();
var ProductUserModel = require('../schema/productuserschema');
var mongoose = require('mongoose');

router.get('/pusers/:id', function (req, res, next) {
    var objectId = mongoose.Types.ObjectId(req.params.id);
    console.log(objectId, req.params.id)
    ProductUserModel.find({ _id: objectId },
        function (err, data) {
            if (err) {
                console.error(err);
            } else {
                res.send(data);
            }
        });
});
router.get('/pusers', function (req, res, next) {
    ProductUserModel.find(function (err, data) {
        if (err) {
            console.error(err);
        } else {
            res.send(data);
        }
    });
});

router.post('/puser', function (req, res, next) {
    var newProductUser = new ProductUserModel();
    newProductUser.productName=req.body.productName;
    newProductUser.productPrice=req.body.productPrice;
    newProductUser.productQty=req.body.productQty;


    newProductUser.save(function (err, data) {
        if (err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});



router.delete('/puser/:id', function (req, res) {
    var objectId = mongoose.Types.ObjectId(req.params.id);
    console.log(objectId, req.params.id)
    ProductUserModel.deleteOne({ _id: objectId },
        function (err, data) {
            if (err) {
                console.error(err);
            } else {
                res.send(data);
            }
        });
});
router.put('/puser/:id', function (req, res, next) {
    ProductUserModel.findByIdAndUpdate(req.body._id,
        {
            
            productName:req.body.productName,
            productPrice:req.body.productPrice,
            productQty:req.body.productQty,

            
        },
        function (err, data) {
            if (err) {
                console.error(err);
            }
            else {
                res.send(data);
                console.log("Data updated!");
            }
        });
});

module.exports = router;
