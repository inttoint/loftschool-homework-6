import {MOVE_ORDER_TO_FARM} from "../actions/marketTypes";
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
        orders: [...state.orders, payload.order]
      };

    default:
      return state;
  }
};

export const getOrderSelector = state => state[moduleName].orders.sort(sortOrderFn);