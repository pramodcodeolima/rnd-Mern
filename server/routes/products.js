var express = require('express');
var router = express.Router();
var Products = require('../models/products')


//List Products
router.get('/', async (req, res, next) => {
  try{
      const productList = await Products.find({}).exec()
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
router.post('/',async(req, res, next) => {
  try{
    const { name, price } = req.body;
    if (name && price && !isNaN(price)){
      const addProduct = new Products({ name, price })
      await addProduct.save()
      return res.status(200).json(addProduct)
    }
    else{
      return res.status(400).json({ message: '400 error'})
    }
  }
  catch{
    return res.status(500).json(err)
  }
});



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



//Update products
router.put('/:id',async (req, res, next) => {
  try{
    const id = req.params.id;
    const { name, price } = req.body;
    if(name && price){
      const updateProduct = await Products.findOneAndUpdate(
        { _id: id},
        { $set: {name, price}},
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


module.exports = router;