import React,{useState} from 'react';

import NewExpense from './component/NewExpense/NewExpense'
import Expenses from './component/Expenses/Expenses.js'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'Car Insurance',
    amount: 294.64,
    date: new Date(2020, 8, 13)
  },
  {
    id: 'e3',
    title: 'New Tv',
    amount: 799.32,
    date: new Date(2020, 7, 15),
  },
  {
    id: 'e4',
    title: 'New Desk',
    amount: 450,
    date: new Date(2021, 5, 12)
  }
];

function App() {
  const[expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense , ...prevExpenses];
    });
  };
  

  return (
    <div>
      <NewExpense onAddExpense ={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
