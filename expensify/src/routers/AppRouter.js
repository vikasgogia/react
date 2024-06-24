import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExpenseDashboard from '../components/expense/ExpenseDashboard';
import AddExpense from '../components/expense/AddExpense';
import EditExpense from '../components/expense/EditExpense';
import Help from '../components/Help';
import NotFound from '../components/NotFound';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ExpenseDashboard />} />
        <Route path="/create" element={<AddExpense />} />
        <Route path="/edit/:id" element={<EditExpense />} />
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default AppRouter;