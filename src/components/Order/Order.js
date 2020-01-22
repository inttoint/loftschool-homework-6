import React from "react";
import './Order.css';

const Order = (props) => {
  const { name, price, createdAt } = props;
  return (
    <div className="order">
      <div className="order__upper">
        <p className="p--order">{`Название: ${name}`}</p>
        <p className="p--order">{`Цена: ${price}`}</p>
      </div>
      <div className="order__lower">
        <p className="p--order">{`Создан: ${createdAt}`}</p>
      </div>
    </div>
  );
};

export default Order;