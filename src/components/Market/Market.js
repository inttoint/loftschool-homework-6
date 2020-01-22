import React, {Component} from 'react';
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
        <form className="new-orders__create-form">
          <div>
            <button>Создать заказ</button>
            <button>Отправить заказ на ферму</button>
          </div>
          <div className="order-list">

          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Market);
