import React from 'react';
import Card from '../UI/Card';
import "./Expenses.css";
import ExpenseItem from './ExpenseItem';
function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}
export default Expenses;