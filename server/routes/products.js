var express = require('express');
const connectToDatabase = require('../db/db');   // import database
var router = express.Router();


//List Products
router.get('/',async function(req, res, next) {
  const db = await connectToDatabase();
  const result = await db.collection('regs').find().toArray();
  if(result){
    return res.status(200).json(result);
  }
  else{
    return res.status(404).json();
  }
});

router.get('/:name',async function(req, res, next) {
    const fname = req.params.name;
    const db = await connectToDatabase();
    const user = await db.collection('regs').findOne({ fname: fname })
    if(user){
        return res.status(200).json(user)
    }
    else{
        return res.status(404).json()
    }
});






module.exports = router;