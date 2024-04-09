import React, { Component } from 'react'
import Loading from './Loading'
import Products from './Products'
import { fetchProducts } from '../Services/apiService'

export default class RndClsCom extends Component {

   
    constructor(props){
        super(props);
        this.state = { isLoading: true, products: []}
    }

    componentDidMount(){
      fetchProducts()
      .then((response) => {
        this.setState({
            isLoading: false,
            products: response.data
        });
      })
      .catch(() => {
        this.setState({
            isLoading: false,
            products: []
        });
      })
      .finally(() => {
      });
    }

  render() {
    return (
      <>
        {this.state.isLoading ? <Loading /> : 
        <div><Products products = {this.state.products} /></div>
        }
      </>
    )
  }
}
