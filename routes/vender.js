var express = require('express');
var router = express.Router();
var VenderModel = require('../schema/vendorschema');
var mongoose = require('mongoose');

router.get('/vendors', function (req, res, next) {
    VenderModel.find(function (err, data) {
        if (err) {
            console.error(err);
        } else {
            res.send(data);
        }
    });
});

router.post('/vendor', function (req, res, next) {
    var newVender = new VenderModel();
    newVender.vendorname = req.body.vendorname;
    newVender.email = req.body.email;
    newVender.password = req.body.password;
    newVender.mobile = req.body.mobile;

    console.log(req)

    newVender.save(function (err, data) {
        if (err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});




module.exports = router;
