import React from 'react';
import { useParams } from 'react-router-dom';
import { editExpense, removeExpense } from '../../reducers/expenses';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ExpenseForm from './ExpenseForm';

const EditExpense = () => {
  const { id } = useParams();
  const expenses = useSelector((state) => state.expenses);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const onSubmit = (exp) => {
    dispatch(editExpense(exp));
    navigate('/');
  }

  const onRemoveClick = () => {
    dispatch(removeExpense(id));
    navigate('/');
  }

  const findExpenseById = (id) => expenses.find((exp) => exp.id === id);

  return (
    <div>
      Editing the expense with id of {id}
      <ExpenseForm onFormSubmit={onSubmit} expense={findExpenseById(id)} />
      <button onClick={onRemoveClick}>Remove</button>
    </div>
  );
};

export default EditExpense;