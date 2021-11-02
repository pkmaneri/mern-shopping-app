var express = require('express');
var router = express.Router();
var MyOrderModel = require('../schema/myorderschema');
var mongoose = require('mongoose');

router.get('/myorders', function (req, res, next) {
    MyOrderModel.find(function (err, data) {
        if (err) {
            console.error(err);
        } else {
            res.send(data);
        }
    });
});

router.post('/myorder', function (req, res, next) {
    var newmyorder = new MyOrderModel();
    newmyorder.cname = req.body.cname;
    newmyorder.mobile = req.body.mobile;
    newmyorder.address = req.body.address;
    newmyorder.product=req.body.product
    // newmyorder.product.pprice=req.body.product.pprice;
    // newmyorder.product.pphoto=req.body.product.pphoto;
    // newmyorder.product.details=req.body.product.details;

   

    console.log(req)

    newmyorder.save(function (err, data) {
        if (err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});




module.exports = router;
