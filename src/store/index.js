import {configureStore} from '@reduxjs/toolkit';
import {customerSlice} from './reducers';

export default configureStore({
  reducer: {
    customer: customerSlice,
  },
});
