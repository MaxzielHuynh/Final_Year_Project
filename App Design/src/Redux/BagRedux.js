import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: {
    wares: [],
    quantum: 0,
    total: 0,
  },
  reducers: {
    addToBag: (state, action) => {
      state.wares.push(action.payload);
      state.quantum += 1;
      state.total += action.payload.cost * action.payload.quantum;
    },
    removeFromBag: (state, action) => {
      state.wares = state.wares.filter((w) => w.id !== action.payload.id);
      state.quantum -= 1;
      state.total -= action.payload.cost;
    },
  },
});

export const { addToBag, removeFromBag } = bagSlice.actions;
export default bagSlice.reducer;
