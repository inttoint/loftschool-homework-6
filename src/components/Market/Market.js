import React, {Component} from 'react';
import { createOrder } from '../../actions/marketActions';
import { getOrdersSelector } from "../../reducers/market";
import {connect} from 'react-redux';
import Order from "../Order";
import './Market.css';

let id = 0;
const getId = () => {
  id += 1;
  return id;
};
export const vegetables = [
  'Капуста',
  'Редиска',
  'Огурцы',
  'Морковь',
  'Горох',
  'Баклажан',
  'Тыква',
  'Чеснок',
  'Лук',
  'Перец',
  'Картофель',
  'Редька'
];

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date()
  };
};

export class Market extends Component {
  render() {
    const { orders } = this.props;

    return (
      <div className="market">
        <h1>Новые заказы в магазине</h1>
        <div className="new-orders__create-form">
          <div>
            <button onClick={this.createOrderHandler}>Создать заказ</button>
            <button>Отправить заказ на ферму</button>
          </div>
          <div className="order-list">
            {
              orders.map(({id, name, price, createdAt}) => (
                <Order key={id} name={name} price={price} createdAt={createdAt} />
              ))
            }
          </div>
        </div>
      </div>
    );
  }

  createOrderHandler = () => this.props.createOrder(getNewOrder());
}

export default connect(state => ({
  orders: getOrdersSelector(state)
}), { createOrder })(Market);
