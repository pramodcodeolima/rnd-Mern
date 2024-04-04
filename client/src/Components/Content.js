import React from 'react'
import './style.css'
import RndFuncCom from './RndFuncCom'
import RndClsCom from './RndClsCom'

export default function Content() {
  return (
    <>
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
    </>
  )
}

