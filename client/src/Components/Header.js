import React, { Component } from 'react'
import './style.css'

export default class Header extends Component {

  render() {
    return (
      <div className='container'>
        <div className='head'>
          <p>APP Name - {this.props.appName}</p>
        </div>
      </div>
      
    )
  }
}
