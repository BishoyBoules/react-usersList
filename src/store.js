import { configureStore } from '@reduxjs/toolkit';
import AddUserReducer from './reducers/AddUserReducer';
// import {logger} from 'redux-logger';
import {thunk} from 'redux-thunk';

const store = configureStore({
  reducer: AddUserReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
});

export default store