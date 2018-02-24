import React, { Component } from "react";
import { connect } from "react-redux";
import { removeGroceryById } from "../actions";

class ShoppingBag extends Component {
  displayShoppingBag() {
    if (this.props.shoppingBag.length > 0) {
      return (
        <ul className="list-group">
          {this.props.shoppingBag.map(item => {
            return (
              <li
                key={item.id}
                className="list-group-item"
                onClick={() => this.props.removeGroceryById(item.id)}
              >
                {item.name}-
                <span className="badge badge-success m-1 p-1">
                  {item.cost}
                </span>-
                <span className="badge badge-info m-1 p-1">{item.weight}</span>-
                <span className="badge badge-primary m-1 p-1">
                  {item.calories}
                </span>
              </li>
            );
          })}
        </ul>
      );
    } else {
      return (
        <li className="list-group-item">
          Please add some items to your shopping bag
        </li>
      );
    }
  }
  render() {
    return (
      <div className="col-md bg-light p-2 m-1">
        <h2 className="text-center">Shopping Bag</h2>
        {this.displayShoppingBag()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state);
  return {
    shoppingBag: state.shoppingBag
  };
}

export default connect(mapStateToProps, { removeGroceryById })(ShoppingBag);
