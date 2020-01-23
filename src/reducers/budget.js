import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from "../actions/marketTypes";
import { MOVE_ORDER_TO_CUSTOMER } from "../actions/farmTypes";

export const moduleName = 'budget';

const initialState = {
  profit: 0,
  marketExpense: 0,
  farmExpense: 0,
  deliveryExpense: 0,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_ORDER:
      return {
        ...state,
        profit: state.profit + payload.order.price,
        marketExpense: state.marketExpense + 20
      };

    case MOVE_ORDER_TO_FARM:
      return {
        ...state,
        farmExpense: state.farmExpense + 100
      };

    case MOVE_ORDER_TO_CUSTOMER:
      return {
        ...state,
        deliveryExpense: state.deliveryExpense + 20
      };

    default:
      return state;
  }
};

export const getBudgetSelector = state => state[moduleName];
