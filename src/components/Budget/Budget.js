import React from "react";
import { getBudgetSelector } from '../../reducers/budget';
import { connect } from 'react-redux';
import './Budget.css';

const Budget = (props) => {
  const { profit, marketExpense, farmExpense, deliveryExpense } = props.budget;
  const total = profit - marketExpense - farmExpense - deliveryExpense;

  return (
    <div className="budget">
      <h1>Бюджет</h1>
      <div>
        <p>{`Всего получено денег: ${profit}`}</p>
        <p>{`Расходы продавцов: ${-marketExpense}`}</p>
        <p>{`Расходы на ферме: ${-farmExpense}`}</p>
        <p>{`Расходы на доставку: ${-deliveryExpense}`}</p>
        <p>{`Итого: ${total}`}</p>
      </div>
    </div>
  );
};

export default connect(state => ({
  budget: getBudgetSelector(state)
}))(Budget);