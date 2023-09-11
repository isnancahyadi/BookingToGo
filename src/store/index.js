import {configureStore} from '@reduxjs/toolkit';
import {customerSlice, reservationSlice} from './reducers';

export default configureStore({
  reducer: {
    customer: customerSlice,
    reservation: reservationSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
