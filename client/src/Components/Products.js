import React from 'react';
import '../Components/style.css';

export default function Products({ products }) {

  return (
    <div className='datatable'>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Desc</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
