import "./App.css";
import React, {useState} from "react";
import ExpenseItem from "./components/ExpenseItem";
import Card from "./components/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/ExpensesFilter";

const INITIAL_EXPENSES = [
  {
    id: 1,
    title: "Kitchen",
    date: new Date(2021, 2, 22),
    amount: 21.37,
  },
  { id:2, title: "Sink", date: new Date(2021, 4, 12), amount: 24 },
  { id:3, title: "Toilet", date: new Date(2021, 6, 18), amount: 542 },
];

function App(props) {
  const [filteredYear, setFilteredYear] = useState('2020')
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES)  

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  return (
    <div>
    <Card className="expenses">
    <NewExpense onAddExpense={addExpenseHandler} />
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
    {filteredExpenses.map((expense) =>
       <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount}/>
       )}
    </Card>
    </div>
  );
}

export default App;
