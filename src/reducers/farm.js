import { MOVE_ORDER_TO_FARM } from "../actions/marketTypes";
import { MOVE_ORDER_TO_CUSTOMER } from "../actions/farmTypes";
import { sortOrderFn } from './helpers'

export const moduleName = 'farm';

const initialState = {
  orders: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case MOVE_ORDER_TO_FARM:
      return {
        ...state,
        orders: [...state.orders, payload]
      };
    case MOVE_ORDER_TO_CUSTOMER:
      return {
        ...state,
        orders: state.orders.filter(order => order.id !== payload.id)
      };

    default:
      return state;
  }
};

export const getOrderSelector = state => state[moduleName].orders.sort(sortOrderFn);