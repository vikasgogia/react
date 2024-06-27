import React from 'react';
import { useDispatch } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../../reducers/expenses'
import { useNavigate } from 'react-router-dom';

const AddExpense = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const onSubmit = (expense) => {
    dispatch(addExpense(expense));
    navigate('/');
  }

  return(
    <div>
      This is from my add expense component
      <ExpenseForm onFormSubmit={onSubmit} />
    </div>
  );
};

export default AddExpense;