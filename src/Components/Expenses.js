import React, { useEffect, useState } from "react";
import AddExpense from "./AddExpense";
import ExpenseCard from "./ExpenseCard";
import axios from "axios";
const Expenses = () => {
  const [month, setMonth] = useState("January");
  const [year, setYear] = useState(2010);
  const [category, setCategory] = useState("Wants");
  const [expenses, setExpenses] = useState([]);
  const [pressed, setPressed] = useState(false);
  const fetchExpenses = async () => {
    try {
      const resp = await axios.get("http://localhost:5000/api/expenses/get");
      setExpenses(resp.data);
    } catch (err) {
      console.error("error fetching expense data");
    }
  };

  useEffect(() => {
    fetchExpenses();
    console.log(expenses);
    // eslint-disable-next-line
  }, [pressed]);
  return (
    <>
      <AddExpense
        month={month}
        year={year}
        category={category}
        setMonth={setMonth}
        setCategory={setCategory}
        setYear={setYear}
        setPressed={setPressed}
      />

      <div className="min-h-screen flex flex-col flex-grow bg-blue-200">
        {expenses.map((expense) => (
          <ExpenseCard
            name={expense.name}
            money={expense.money}
            month={expense.month}
            year={expense.year}
            category={expense.category}
            id={expense._id}
            key={expense._id}
            setPressed={setPressed}
          />
        ))}
      </div>
    </>
  );
};

export default Expenses;
