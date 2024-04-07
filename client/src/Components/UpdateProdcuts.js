import React, { useState, useEffect } from 'react'
import { updateProducts, fetchProductsById } from '../Services/apiService'
import '../Components/style.css'

export default function UpdateProdcuts() {

const [product, setProduct] = useState({id: '', name: '', price: '', desc: ''})
const [errors, setErrors] = useState({})

useEffect(() => {
  if (product.id) {
    fetchProductsById(product.id)
      .then((response) => {
        const fetchedProduct = response.data;
        setProduct(prevProduct => ({
          ...prevProduct,
          name: fetchedProduct.name,
          price: fetchedProduct.price,
          desc: fetchedProduct.desc
        }));
        console.log(fetchedProduct.name)
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
}

}, [product.id]);


const handleSubmit = (e) => {
  e.preventDefault();
//   console.log(product.id)
  if (validateForm()) {
    updateProducts(product.id, {
      name: product.name,
      price: product.price,
      desc: product.desc
    })
    .then(() => {
        setProduct({ id: '', name: '', price: '', desc: '' });
    })
    .catch(() => {});
  }
};

const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name] : value})
}

const validateForm = () => {
    let tempErrors = {};
    tempErrors.id = product.id ? '' : 'Id field is required.'
    setErrors({...tempErrors})
    return Object.values(tempErrors).every((x) => x === '');
}

  return (
    <>
      <form onSubmit={handleSubmit}>
      <div className='form-item'>
          <label htmlFor='id'>ID  </label>
          <input
          type='text'
          id='id'
          name='id'
          value={product.id}
          onChange={handleChange}
          />
          <div className='error'>{errors.id}</div>
        </div>
        
        <div className='form-item'>
          <label htmlFor='name'>Name  </label>
          <input
          type='text'
          id='name'
          name='name'
          value={product.name}
          onChange={handleChange}
          />
        </div>

        <div className='form-item'>
          <label htmlFor='price'>Price  </label>
          <input
          type='text'
          id='price'
          name='price'
          value={product.price}
          onChange={handleChange}
          />
          <div className='error'>{errors.price}</div>
        </div>

        <div className='form-item'>
          <label htmlFor='desc'>Desc  </label>
          <input
          type='text'
          id='desc'
          name='desc'
          value={product.desc}
          onChange={handleChange}
          />
        </div>
        <button type='submit'>Update Product</button>
      </form>
    </>
  )
}
