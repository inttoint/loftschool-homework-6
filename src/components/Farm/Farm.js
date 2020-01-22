import React, { Component } from "react";
import { getOrderSelector } from '../../reducers/farm';
import { connect } from 'react-redux';
import './Farm.css';
import Order from "../Order";

class Farm extends Component {
  render() {
    const { orders } = this.props;
    return(
      <div className="farm">
        <h1>Производство на ферме</h1>
        <button disabled>Отправить урожай клиенту</button>
        {
          orders.map(({id, name, price, createdAt}) => (
            <Order key={id} name={name} price={price} createdAt={createdAt}/>
          ))
        }
      </div>
    );
  }
}

export default connect(state => ({
  orders: getOrderSelector(state)
}))(Farm);