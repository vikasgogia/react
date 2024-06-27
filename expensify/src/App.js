import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addExpense } from './reducers/expenses';
import AppRouter from './routers/AppRouter';

function App() {
  const dispatch = useDispatch();

  const expense1 = { 
    id: uuid(), 
    description: "test description", 
    note: "hi there", 
    amount: 400,
    createdAt: Date.now() 
  };

  dispatch(addExpense(expense1));

  setTimeout(() => {
    const expense2 = { 
      id: uuid(), 
      description: "water bill", 
      note: "hi there", 
      amount: 4000,
      createdAt: Date.now() 
    };
  
    dispatch(addExpense(expense2));
  }, 3000);
  
  return <AppRouter />;
}

export default App;
