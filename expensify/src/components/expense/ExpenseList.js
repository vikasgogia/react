import React from 'react';
import { useSelector } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getFilteredExpenses from '../../selectors/expenses';

const ExpenseList = () => {
    const state = useSelector((state) => state);
    const expenses = getFilteredExpenses(state.expenses, state.filters);

    return(
        <div>
            <h1>Expense List</h1>
            { expenses.map((expense) => <ExpenseListItem {...expense} key={expense.id} />) }
        </div>
    );
};

export default ExpenseList;