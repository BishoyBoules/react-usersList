import {createStore, combineReducers, applyMiddleware} from 'redux';
import { thunk } from 'redux-thunk';
import { AddUserReducer } from './reducers/AddUserReducer';

const reducer = combineReducers({
  Users: AddUserReducer,
})

const initialState = {
  Users: []
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
)

export default store