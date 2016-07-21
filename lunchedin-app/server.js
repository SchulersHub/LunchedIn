var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('orders', ['orders']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/orders', function(req, res) {
  console.log('I received a GET request')

  db.orders.find(function(err,docs){
    console.log(docs);
    res.json(docs);
  });
});

app.post('/orders', function (req, res){
  console.log(req.body);
  db.orders.insert(req.body, function(err, doc) {
    res.json(doc);
  })
});

app.delete('/orders/:id', function (req,res){
  var id = req.params.id;
  console.log(id);
  db.orders.remove({_id: mongojs.ObjectId(id)}, function (err, doc){
    res.json(doc);
  })
});

app.get('/orders/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.orders.findOne({_id: mongojs.ObjectId(id)}, function (err, doc){
    res.json(doc);
  });
});

app.put('/orders/:id', function (req, res){
  var id = req.params.id;
  console.log(req.body.name);
  db.orders.findAndModify({query: {_id: mongojs.ObjectId(id)},
    update: {$set: {name: req.body.name, order: req.body.order, payment: req.body.payment}},
    new: true}, function (err,doc) {
      res.json(doc);
    });
});


app.listen(3000);
console.log("server running on port 3000");
