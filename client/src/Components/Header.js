import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props){
        super(props)
    }


  render() {
    return (
      <div>APP Name - {this.props.appName}</div>
    )
  }
}
