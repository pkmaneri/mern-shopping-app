var express = require('express');
var router = express.Router();
var MyCartModel = require('../schema/mycartschema');
var mongoose = require('mongoose');

router.get('/mycarts', function (req, res, next) {
    MyCartModel.find(function (err, data) {
        if (err) {
            console.error(err);
        } else {
            res.send(data);
        }
    });
});

router.post('/mycart', function (req, res, next) {
    var newcart = new MyCartModel();
    newcart.pname = req.body.pname;
    newcart.pprice = req.body.pprice;
    newcart.pphoto = req.body.pphoto;
    newcart.details=req.body.details
    console.log(req)

    newcart.save(function (err, data) {
        if (err) {
            console.log(error);
        }
        else {
            res.send("Data inserted");
        }
    });
});

router.delete('/mycart/:id', function (req, res, next) {
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
