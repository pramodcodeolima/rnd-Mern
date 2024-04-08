import React from 'react';
import '../Components/style.css';
import { Link } from 'react-router-dom'
import './style.css'

export default function Products({ products }) {


  const handleEdit = (productId) => {
    localStorage.setItem('id', productId);
  }

  const handleDelete = (productId) => {
    localStorage.setItem('id', productId);
  }

  return (
    <div className='datatable'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Desc</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.desc}</td>
              <td>
                <Link className="btn" to={'/edit'}>
                  <button onClick={() => handleEdit(product._id)}>Edit</button>
                </Link>
              </td>
              <td>
                <Link className="btn" to={'/delete'}>
                  <button onClick={() => handleDelete(product._id)}>Delete</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
