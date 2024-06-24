import { createSlice } from '@reduxjs/toolkit';

const expenseSlice = createSlice({
    name: 'expenses-slice',
    initialState: [],
    reducers: {
        addExpense: (state, action) => ([...state, action.payload]),
        removeExpense: (state, action) => (state.filter(({ id }) => id !== action.payload)),
        editExpense: (state, action) => (
            state.map((expense) => {
                if(expense.id !== action.payload.id) {
                    return expense;
                }
                return {
                    ...expense,
                    ...action.payload.updates
                };
            })
        ),
    }
});
  
export const { addExpense, removeExpense, editExpense } = expenseSlice.actions;
export default expenseSlice.reducer;