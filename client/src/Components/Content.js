import React from 'react';
import './style.css';
import RndFuncCom from './RndFuncCom';
import RndClsCom from './RndClsCom';
import CreateProduct from './CreateProduct';
import UpdateProdcuts from './UpdateProdcuts';
import DeleteProducts from './DeleteProducts';

export default function Content() {
  return (
    <>
      <hr />
      <div className='rnd'>
        <h3>CreatedProducts</h3>
      </div>
      <div className='rnd-form'>
        <CreateProduct />
      </div>
      <hr />
      <div className='rnd'>
        <h3>RND Functional Component</h3>
      </div>
      <div className='rndfunc'>
        <RndFuncCom />
      </div>
      <hr />
      <div className='rnd'>
        <h3>RND Class Component</h3>
      </div>
      <div className='rndfunc'>
        <RndClsCom />
      </div>
      <hr />
      <div className='rnd'>
        <h3>Update Products</h3>
      </div>
      <div className='rnd-form'>
        <UpdateProdcuts />
      </div>
      <hr />
      <div className='rnd'>
        <h3>Delete Products</h3>
      </div>
      <div className='rnd-form'>
        <DeleteProducts />
      </div>
      <hr />
    </>
  );
}
