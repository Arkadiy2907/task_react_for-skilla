import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
import filterSlice from './filterSlice';
import rowSlice from './rowSlise';

const RootReducer = combineReducers({
  rows: rowSlice,
  filter: filterSlice,
})

export default configureStore({
  reducer: RootReducer,
});