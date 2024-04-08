import React, { useState, useEffect } from 'react'
import { updateProducts, fetchProductsById } from '../Services/apiService'
import '../Components/style.css'

export default function UpdateProdcuts() {

const [product, setProduct] = useState({})
const [errors, setErrors] = useState({})
const [success, setSuccess] = useState('');

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
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
}

}, [product.id]);


const handleSubmit = (e) => {
  e.preventDefault();
  if (validateForm()) {
    updateProducts(product.id, {
      name: product.name,
      price: product.price,
      desc: product.desc
    })
    .then(() => {
        setProduct({ id: '', name: '', price: '', desc: '' });
        setSuccess('Product Updated Successfully')
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
          <div className='error'>{success}</div>
        </div>
        <button type='submit'>Update Product</button>
      </form>
    </>
  )
}
