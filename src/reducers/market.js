import {CREATE_ORDER} from "../actions/marketTypes";

const initialState = {
  orders: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  console.log(action);
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
