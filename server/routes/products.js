var express = require('express');
const DUMMY_PRODUCTS_LIST = require('../dummy-data/Dummy');
var router = express.Router();


//List Products
router.get('/', function(req, res, next) {
  return res.status(200).json(DUMMY_PRODUCTS_LIST)
});





module.exports = router;