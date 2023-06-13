import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import Card from "./components/Card";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      title: "bar1",
      date: new Date(2021, 2, 22),
      amount: 21.37,
    },
    { title: "bar2", date: new Date(2021, 4, 12), amount: 2 },
    { title: "bar3", date: new Date(2021, 6, 18), amount: 2 },
  ];
  const addExpenseHandler = (expense) => {
    console.log(expense)
  }
  return (
    <Card className="expenses">
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseItem title={expenses[0].title} date={expenses[0].date} amount={expenses[0].amount}/>
      <ExpenseItem title={expenses[1].title} date={expenses[1].date} amount={expenses[1].amount}/>
      <ExpenseItem title={expenses[2].title} date={expenses[2].date} amount={expenses[2].amount}/>
    </Card>
  );
}

export default App;
