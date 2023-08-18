import React from "react";
import Expense from "./expense";

const expenses = ({ expenses, deleteExpense, editExpense }) => {
  return (
    <ul>
      {expenses.map((expense, index) => {
        return (
          <Expense
            key={expense.id}
            expense={expense}
            index={index}
            deleteExpense={deleteExpense}
            editExpense={editExpense}
          />
        );
      })}
    </ul>
  );
};

export default expenses;
