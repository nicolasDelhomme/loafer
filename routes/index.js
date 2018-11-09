var express = require('express');
var router = express.Router();

let config = require('../conf.json');

let parseGeneLists = require('../middleware/parseGeneLists');
let generateGoferRequest = require('../middleware/generateGoferRequest');
let generateColumns = require('../middleware/generateColumns');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {org: config.org});
});

router.post('/', parseGeneLists, generateGoferRequest, generateColumns, function(req, res, next) {
  res.render('results', {goferReq: req.goferReq});
});

module.exports = router;
