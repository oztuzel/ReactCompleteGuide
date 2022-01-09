import NewExpense from './component/NewExpense/NewExpense'
import Expenses from './component/Expenses/Expenses.js'

function App() {
  const expenses = [
    {
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      title: 'Car Insurance',
      amount: 294.64,
      date: new Date(2020, 8, 13)
    },
    {
      title: 'New Tv',
      amount: 799.32,
      date: new Date(2020, 7, 15),
    },
    {
      title: 'New Desk',
      amount: 450,
      date: new Date(2021, 5, 12)
    }
  ];




  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
