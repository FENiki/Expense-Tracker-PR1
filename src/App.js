import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
// import ExpenseItem from "./components/ExpenseItem";
// import logo from "./logo.svg";
import "./App.css";
// import ExpenseDate from "./components/Expenses/ExpenseDate";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    //with adding new expense, it triggers
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <header className="App-header">
        <div>
          <h2 className="title">Expense Tracker</h2>
          <NewExpense onAddExpense={addExpenseHandler} />
          <Expenses items={expenses} />
        </div>
      </header>
    </div>
  );
};

export default App;
