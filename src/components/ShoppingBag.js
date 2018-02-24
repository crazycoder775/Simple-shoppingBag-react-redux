import React, { Component } from 'react';


class ShoppingBag extends Component {
  render() {
    return (
      <div className="col-md bg-light p-2 m-1">
        <h2 className="text-center">Shopping Bag</h2>
        <ul className="list-group">
          <li className="list-group-item">Cost</li>
          <li className="list-group-item">Cost</li>
          <li className="list-group-item">Cost</li>
        </ul>
      </div>
    )
  }
}

export default ShoppingBag;