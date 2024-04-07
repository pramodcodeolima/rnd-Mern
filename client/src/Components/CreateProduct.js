import React, { useState } from 'react'
import { createProducts } from '../Services/apiService'
import '../Components/style.css'

const CreateProduct = () => {

  const [product, setProduct] = useState({name: '', price: 0, desc: ''})
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateForm()){
      createProducts(product)
      .then((response) => {
        setProduct({name: '', price: 0, desc: ''})
        setSuccess('Product Created Successfully')
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
      })
    }
  }


  const validateForm = () => {
    let tempErrors = {}
    tempErrors.name = product.name ? '' : 'Name field is required.'
    tempErrors.price = product.price > 0 ? '' : 'Price must be greater than zero.'
    tempErrors.desc = '';

    setErrors({...tempErrors})
    return Object.values(tempErrors).every((x) => x == '');
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name] : value})
  }



  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='form-item'>
          <label htmlFor='name'>Name  </label>
          <input
          type='text'
          id='name'
          name='name'
          value={product.name}
          onChange={handleChange}
          />
          <div className='error'>{errors.name}</div>
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
          <div>{errors.desc}</div>
          <div className='error'>{success}</div>
        </div>
        <button type='submit'>Create Product</button>
      </form>
    </>
  )
}

export default CreateProduct;