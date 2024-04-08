import React from 'react'
import { Link } from 'react-router-dom'

export default function Btn() {
  return (
    <div className='newBtn'>
        <Link className='btn' to={'/create'}>
            <button >Add Product</button>
        </Link>
    </div>
  )
}
