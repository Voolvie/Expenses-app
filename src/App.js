import "./App.css";
import React, {useState} from "react";
import ExpenseItem from "./components/ExpenseItem";
import Card from "./components/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/ExpensesFilter";

function App(props) {
  const [filteredYear, setFilteredYear] = useState('2020')
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
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  return (
    <div>
    <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseItem title={expenses[0].title} date={expenses[0].date} amount={expenses[0].amount}/>
      <ExpenseItem title={expenses[1].title} date={expenses[1].date} amount={expenses[1].amount}/>
      <ExpenseItem title={expenses[2].title} date={expenses[2].date} amount={expenses[2].amount}/>
    </Card>
    </div>
  );
}

export default App;
