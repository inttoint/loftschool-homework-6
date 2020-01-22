import React, {Component} from 'react';
import { createOrder } from '../../actions/marketActions';
import './Market.css';

import {connect} from 'react-redux';
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
    return (
      <div className="market">
        <h1>Новые заказы в магазине</h1>
        <div className="new-orders__create-form">
          <div>
            <button onClick={this.createOrderHandler}>Создать заказ</button>
            <button>Отправить заказ на ферму</button>
          </div>
          <div className="order-list" />
        </div>
      </div>
    );
  }

  createOrderHandler = () => this.props.createOrder(getNewOrder());
}

export default connect(null, { createOrder })(Market);
