import { combineReducers, configureStore } from '@reduxjs/toolkit';
import expenseReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';

const store = configureStore({
    reducer: combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
});

export default store;