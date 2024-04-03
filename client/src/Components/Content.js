import React from 'react'
import { useState } from 'react'
import RndFuncCom from './RndFuncCom'
import RndClsCom from './RndClsCom'

export default function Content() {
  return (
    <>
      <hr />
      <h3>RND Functional Component</h3>
      <div>
        <RndFuncCom />
      </div>
      <hr />
      <h3>RND Class Component</h3>
      <div>
        <RndClsCom />
      </div>
      <hr />
    </>
  )
}

