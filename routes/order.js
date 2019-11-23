var express = require('express');
var router = express.Router();
var Datastore = require('nedb')
db2 = new Datastore({
  filename: 'database/order',
  autoload: true
});
/* GET all order of a user. */
var allorder = router.get('/api/v1/allorder', function (req, res) {
  db2.find({
    user: req.body.user
  }, function (err, docs) {
    if(req.body.user==null) {
      res.send({
        status: "failed",
        reason: "wrong json request"
      })
    } else{
      res.send(docs)
    }
    
  });
});

/* POST an order. */
var order = router.post('/api/v1/order', function (req, res) {
  var doc = {
    user: req.body.user,
    product: req.body.product,
    qt: req.body.qt
  }
  if(req.body.user==null || req.body.product==null || req.body.qt==null) {
    res.send({
      status: "failed",
      reason: "wrong json request"
    })
  } else{
    db2.insert(doc, function (err, newDoc) {
      res.send({
        status: "success",
        data: req.body
      });
    });
  }


});

module.exports = {
  allorder,
  order
};
