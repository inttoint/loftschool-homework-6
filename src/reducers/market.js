import {CREATE_ORDER} from "../actions/marketTypes";

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
        orders: [...state.orders, payload.order]
      };

    default:
      return state;
  }
};

export const getOrdersSelector = state => state[moduleName].orders;
