import React from "react";
import Expense from "./expense";

const expenses = ({ expenses, onDeleteExpense, onEditExpense }) => {
  return (
    <ul>
      {expenses.map((expense, index) => {
        return (
          <li key={expense.id}>
            <Expense
              expense={expense}
              index={index}
              onDeleteExpense={onDeleteExpense}
              onEditExpense={onEditExpense}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default expenses;
