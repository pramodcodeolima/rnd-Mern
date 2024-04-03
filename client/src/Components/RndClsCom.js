import React, { Component } from 'react'
import Loading from './Loading'
import Product from './Products'
import axios from 'axios'

export default class RndClsCom extends Component {

   
    constructor(props){
        super(props);
        this.state = { isLoading: true, products: []}
    }

    componentDidMount(){
      axios.get(`${process.env.REACT_APP_API_URL}`)
      .then((response) => {
        //console.log(response.data)
        this.setState({
            isLoading: false,
            products: response.data
        });
      })
      .catch((error) => {
        console.log(error);
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
        <div>{this.state.products.map((item) => <Product key={item._id} name={item.name} price={item.price} />)}</div>
        }
      </>
    )
  }
}
