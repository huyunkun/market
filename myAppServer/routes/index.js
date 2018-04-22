var express = require('express');
var router = express.Router();
var mechantsData = require('./data/mechants.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/merchantList',function(req,res,net) {
  res.json(mechantsData)
});

module.exports = router;
