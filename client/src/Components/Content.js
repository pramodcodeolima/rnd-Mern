import React from 'react';
import './style.css';
import RndFuncCom from './RndFuncCom';
import Btn from './Btn'

export default function Content() {
  return (
    <>
      <hr />
      <div className='rnd-form'>
        <Btn />
      </div>
      <div className='rnd'>
        <h3>RND Functional Component</h3>
      </div>
      <div className='rndfunc'>
        <RndFuncCom />
      </div>
      <hr />
    </>
  );
}
