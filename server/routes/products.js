var express = require('express');
var router = express.Router();
var Products = require('../models/products')
var { validateRequestPayload } = require('../Utility/validateRequestPayload')


//List Products
router.get('/', async (req, res, next) => {
  const { page = 1, limit = 10 } = req.query
  try{
    const productList = await Products.find({}).skip((page - 1) * limit).limit(limit).sort({_id : -1}).exec()
    return res.status(200).json(productList)
  }catch(e){
    res.status(404).json({ message: '404 error'})
  }

});


//Products get by ID
router.get('/:id',async function(req, res, next)  {
  try{
    const id = req.params.id;
    const product = await Products.findOne({_id: id}).exec()
    if (product){
      return res.status(200).json(product)
    }
    else{
      return res.status(404).json({ message: '404 error'})
    }
  }catch(err){
    return res.status(500).json({ message: '500 error'})
  } 
  
});




//Create Products

const validationConfigCreatedObj = [
  { key: "name", type: "string", isRequired: true },
  { key: "price", type: "number", isRequired: true },
  { key: "desc", type: "string", isRequired: false }
]

router.post('/',async(req, res, next) => {
  try{
    const isError = validateRequestPayload(req.body, validationConfigCreatedObj)
    if (!isError.length){
      const addProduct = new Products(req.body)
      await addProduct.save()
      return res.status(200).json(addProduct)
    }
    else{
      return res.status(400).json(isError)
    }
  }
  catch{
    return res.status(500).json(err)
  }
});




//Update products

const validationConfigUpdateObj = [
  { key: "name", type: "string", isRequired: false },
  { key: "price", type: "number", isRequired: false },
  { key: "desc", type: "string", isRequired: false }
]

router.put('/:id',async (req, res, next) => {
  try{
    const id = req.params.id;
    const isError = validateRequestPayload(req.body, validationConfigUpdateObj)
    if(!isError.length){
      const updateProduct = await Products.findOneAndUpdate(
        { _id: id},
        req.body,
        { new: true}
      ).exec();
      if (updateProduct){
        return res.status(200).json(updateProduct)
      }
      else{
        return res.status(404).json({ message: 'Product not found'})
      }
    }
    else{
      return res.status(400).json({ message: '400 error'})
    }
  }
  catch (err){
    return res.status(500).json({ message: '500 error'})
  }

})




//Delete Product
router.delete('/:id',async (req, res, next) => {
  try{
    const id = req.params.id
    const product = await Products.findOneAndDelete({_id: id}).exec()
    if (product){
      return res.status(200).json({ message: 'Product Deleted'})
    }else{
      return res.status(404).json({ message: '404 error'})
    }
  }catch(err){
    return res.status(500).json({ message: '500 error'})
  }
});



module.exports = router;