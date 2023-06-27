import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: { total: 0 },
  reducers: {
    add(state, { payload }) {
      const count = state[payload] || 0;
      state[payload] = Math.min(30, count + 1);
      if (count < 30) {
        state.total += 1;
      }
    },

    remove(state, { payload }) {
      const count = state[payload] || 0;

      if (!count) return;

      if (count === 1) {
        delete state[payload];
        state.total -= 1;
        return;
      }

      state[payload] = count - 1;
      state.total -= 1;
    },

    delete(state, { payload }) {
      state.total -= state[payload];
      delete state[payload];
    },
  },
});
