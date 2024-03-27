var express = require('express');
const DUMMY_PRODUCTS_LIST = require('../dummy-data/Dummy');
var router = express.Router();


//List Products
router.get('/', function(req, res, next) {
  return res.status(200).json(DUMMY_PRODUCTS_LIST)
});

router.get('/:id', function(req, res, next) {
    const id = req.params.id;
    const product = DUMMY_PRODUCTS_LIST.find((item) => item.id === id)
    if(product){
        return res.status(200).json(product)
    }
    else{
        return res.status(404).json()
    }
});



module.exports = router;