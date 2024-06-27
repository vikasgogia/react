import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, createdAt, description, amount }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h1>{description}</h1>
        </Link>
        <p>{createdAt}</p>
        <p>{amount}</p>
    </div>
);

export default ExpenseListItem;