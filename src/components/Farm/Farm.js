import React, { Component } from "react";
import { getOrderSelector } from '../../reducers/farm';
import { moveOrderToCustomer } from "../../actions/farmActions";
import { connect } from 'react-redux';
import './Farm.css';
import Order from "../Order";

class Farm extends Component {
  render() {
    const { orders } = this.props;
    return(
      <div className="farm">
        <h1>Производство на ферме</h1>
        <button
          onClick={() => this.moveOrderToCustomer(orders[orders.length - 1])}
          disabled={orders.length === 0} >
          Отправить урожай клиенту
        </button>
        {
          orders.map(({id, name, price, createdAt}) => (
            <Order key={id} name={name} price={price} createdAt={createdAt}/>
          ))
        }
      </div>
    );
  }

  moveOrderToCustomer = order => this.props.moveOrderToCustomer(order);
}

export default connect(state => ({
  orders: getOrderSelector(state)
}), { moveOrderToCustomer })(Farm);