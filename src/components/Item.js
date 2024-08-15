import React, { Component } from 'react'
import hrt from '../img/heart.svg'
export class Item extends Component {
  render() {
    return (
        <div className='item'>
            <img className='itemPic' src={this.props.item.url}/>
            <div class='item-title'>
              <h2>{this.props.item.title}</h2>
              <img className='heart-btn' src={hrt}/>
            </div>
            <p>{this.props.item.id}</p>
           
        </div>
    )
  }
}

export default Item