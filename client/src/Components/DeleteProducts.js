import React, { useState, useEffect } from 'react'
import { deleteProducts, fetchProductsById } from '../Services/apiService'
import '../Components/style.css'
import { useNavigate } from 'react-router-dom'

export default function DeleteProducts() {

const [product, setProduct] = useState({id: '', name: '', price: '', desc: ''})
const [errors, setErrors] = useState({})
const navigate = useNavigate();


useEffect(() => {
  const productId = localStorage.getItem('id');
  product.id = productId;
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
    deleteProducts(product.id)
    .then((response) => {
        setProduct({id: '', name: '', price: 0, desc: ''})
        navigate('/');
    })
    .catch((error) => {
    });
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
    <div className='subcontainer'>
      <form onSubmit={handleSubmit}>
      <div className='title'>
          <h2>Delete Products</h2>
      </div>
      <div className='form-item'>
          <label htmlFor='id'>ID  </label>
          <input
          type='text'
          id='id'
          name='id'
          value={product.id}
          onChange={handleChange}
          disabled
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
          disabled
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
          disabled
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
          disabled
          />
        </div>

        <button type='submit'>Delete Product</button>
      </form>
    </div>
  )
}
