import {createSlice} from '@reduxjs/toolkit';

import DataCustomer from '../../assets/data/guests.json';

export const customerSlice = createSlice({
  name: 'customer',
  initialState: {
    value: DataCustomer,
  },
  reducers: {
    updateDataCustomer: (state, action) => {
      state.value = action.payload;
    },
    updateDataGuest: (state, action) => {
      state.value.guests_data = action.payload;
    },
  },
});

export const {updateDataCustomer, updateDataGuest} = customerSlice.actions;

export default customerSlice.reducer;
