export const SelectCartModule = (state) => state.cart;

export const SelectProductAmount = (state, id) =>
  SelectCartModule(state)[id] || 0;

export const SelectTotalAmount = (state) => SelectCartModule(state).total;
