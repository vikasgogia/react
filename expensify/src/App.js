import { v4 as uuid } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { addExpense, removeExpense, editExpense } from './reducers/expenses';
import AppRouter from './routers/AppRouter';

function App() {
  // const dispatch = useDispatch();

  // const expense = { 
  //   id: uuid(), 
  //   description: "test description", 
  //   note: "hi there", 
  //   amount: 400,
  //   createdAt: Date.now() 
  // };

  // dispatch(addExpense(expense));

  // console.log(useSelector((state) => state));

  // dispatch(editExpense({ id: expense.id, amount: 1000 }));

  // console.log(useSelector((state) => state));

  // dispatch(removeExpense(expense.id));

  // console.log(useSelector((state) => state));
  
  return <AppRouter />;
}

export default App;
