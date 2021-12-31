import ExpenseItem from "./component/ExpenseItem";

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
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
        ></ExpenseItem>

    </div>
  );
}

export default App;