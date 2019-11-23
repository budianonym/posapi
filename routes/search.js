var express = require('express');

var router = express.Router();
var Datastore = require('nedb')
db = new Datastore({
  filename: 'database/products',
  autoload: true
});

/* GET list product. */
var product = router.get('/api/v1/product', function (req, res) {
  db.find({
    $or: [{
      name: req.body.name
    }, {
      category: req.body.category
    }, {
      series: req.body.series
    }]
  }, function (err, docs) {
      res.send(docs);
  });
});

/* GET list of 2 products. */
var compare = router.get('/api/v1/compare', function (req, res) {
  db.find({
    $or: [{
      _id: req.body.id1
    }, {
      _id: req.body.id2
    }]
  }, function (err, docs) {
    res.send(docs);
  });
});



module.exports = {
  product,
  compare
};

