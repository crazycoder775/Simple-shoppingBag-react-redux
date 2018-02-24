import React, { Component } from 'react';
import { connect } from "react-redux";
import { removeGroceryById } from "../actions";


class ShoppingBag extends Component {
  render() {
    return (
      <div className="col-md bg-light p-2 m-1">
        <h2 className="text-center">Shopping Bag</h2>
        <ul className="list-group">
          {this.props.shoppingBag.map((item) => {
            return <li key={item.id}
              className="list-group-item"
              onClick={() => this.props.removeGroceryById(item.id)}
            >
              {item.name}-
                            <span className="badge badge-success m-1 p-1">{item.cost}</span>-
                            <span className="badge badge-info m-1 p-1">{item.weight}</span>-
                            <span className="badge badge-primary m-1 p-1">{item.calories}</span>
            </li>
          })}
        </ul>
      </div>
    )
  }
}
function mapStateToProps(state) {
  console.log(state);
  return {
    shoppingBag: state.shoppingBag
  }
}

export default connect(mapStateToProps,{removeGroceryById})(ShoppingBag);