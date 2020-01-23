import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from "../actions/marketTypes";
import { sortOrderFn } from './helpers';

export const moduleName = 'market';

const initialState = {
  orders: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_ORDER:
      return {
        ...state,
        orders: [...state.orders, payload]
      };
    case MOVE_ORDER_TO_FARM:
      return {
        ...state,
        orders: state.orders.filter(order => order.id !== payload.id)
      };

    default:
      return state;
  }
};

export const getOrdersSelector = state => state[moduleName].orders.sort(sortOrderFn);
