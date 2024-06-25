import React from 'react';
import { useDispatch } from 'react-redux';
import { removeExpense } from '../../reducers/expenses';

const ExpenseListItem = ({ id, createdAt, description, amount }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{description}</h1>
            <p>{createdAt}</p>
            <p>{amount}</p>
            <button onClick={() => dispatch(removeExpense(id))}>Remove</button>
        </div>
    );
};

export default ExpenseListItem;