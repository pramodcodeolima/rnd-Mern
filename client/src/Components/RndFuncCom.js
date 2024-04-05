import React, {useEffect, useState} from 'react'
import Product from './Products'
import Loading from './Loading'
import axios from 'axios'

export default function RndFuncCom() {

  const [isLoading, setIsloading] = useState(true);
  const [products, setProducts] = useState([]);
  const URL = process.env.REACT_APP_API_URL // import endpoint from .env

  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        setProducts(response.data);
        setIsloading(false);
      })
      .catch(() => {
      })
      .finally(() => {
      });
  }, [])



  return (
    <>
    {isLoading ? <Loading /> : 
      <div>{products.map((item) => <Product key={item._id} name={item.name} price={item.price} />)}</div> }
    </>
  )
}
