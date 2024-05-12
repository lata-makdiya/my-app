import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from './CounterSlice';
import { countMiddleware } from './middleware/countMiddleware';
import apiMiddleware from './middleware/apiMiddleware';
import userSlice from './userSlice';
import StringSlice from './StringSlice';
import FormData from './FormData';

const store = configureStore({
  reducer: {
    counter: CounterReducer,
    string: StringSlice,
    user: userSlice,
    formData: FormData,
  },
  // middleware: (getDefaultMiddleware) => [
  //   ...getDefaultMiddleware(),
  //   countMiddleware, 
  //   apiMiddleware, 
  // ],
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(countMiddleware, apiMiddleware);
  }
});

export default store;

// https://www.scaler.com/topics/nodejs/currying-in-javascript/