import {CREATE_ORDER} from "./marketTypes";

export const createOrder = (order) => ({
  type: CREATE_ORDER,
  payload: { order }
});