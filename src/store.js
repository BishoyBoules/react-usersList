import {createStore, combineReducers, applyMiddleware} from 'redux';
import { thunk } from 'redux-thunk';
import { AddUserReducer } from './reducers/AddUserReducer';
import { FavsReducer } from './reducers/FavsReducer';

const reducer = combineReducers({
  Users: AddUserReducer,
  Favs: FavsReducer
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