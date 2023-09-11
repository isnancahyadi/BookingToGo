import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import config from '../../../config';
import axios from 'axios';

const initialState = {
  data: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const getReservation = createAsyncThunk(
  'reservation/getReservation',
  async (_, thunkAPI) => {
    try {
      const {data} = await axios.get(config.REACT_APP_API, {
        headers: {
          'X-Parse-Application-Id': config.REACT_APP_API_ID,
          'X-Parse-REST-API-Key': config.REACT_APP_API_KEY,
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  extraReducers: builder => {
    builder.addCase(getReservation.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getReservation.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(getReservation.rejected, state => {
      state.isLoading = false;
      state.isError = true;
      state.message = 'error';
    });
  },
});

export default reservationSlice.reducer;
