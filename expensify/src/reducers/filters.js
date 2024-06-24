import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter-slice',
    initialState: {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    },
    reducers: {
        setTextFilter: (state, action) => ({ ...state, text: action.payload }),
        sortByAmount: (state) => ({ ...state, sortBy: 'amount' }),
        sortByDate: (state) => ({ ...state, sortBy: 'date' }),
        setStartDate: (state, action) => ({ ...state, startDate: action.payload }),
        setEndDate: (state, action) => ({ ...state, endDate: action.payload }),
    },
});
  
export const { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } = filterSlice.actions;
export default filterSlice.reducer;