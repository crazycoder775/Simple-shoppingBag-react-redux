import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addGroceryById} from '../actions';

class Grocery extends Component{
  render(){
    return (
      <div className="col-md bg-warning p-2 m-1">
        <h2 className="text-center">Grocery Items</h2>
        <ul className="list-group">
        {this.props.grocery.map((item)=>{
            return <li 
            onClick={()=>this.props.addGroceryById(item.id)}
            key={item.id} className="list-group-item">
            {item.name} - {item.cost} - {item.weight} - {item.calories}
            </li>
        })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    grocery : state.grocery
  }
}

export default connect(mapStateToProps,{addGroceryById})(Grocery);