import React from 'react';
import { useSelector } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getFilteredExpenses from '../../selectors/expenses';

const ExpenseList = () => {
    const expenses = getFilteredExpenses(
        useSelector((state) => state.expenses), 
        useSelector((state) => state.filters)
    );

    return(
        <div>
            <h1>Expense List</h1>
            { expenses.map((expense) => <ExpenseListItem {...expense} key={expense.id} />) }
        </div>
    );
};

export default ExpenseList;