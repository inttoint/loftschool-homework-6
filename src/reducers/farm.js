export const moduleName = 'farm';

const initialState = {
  orders: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};