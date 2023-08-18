"use client";
import Expenses from "@src/components/expenses";
import NewExpenseFormModal from "@src/components/newExpenseForm";
import { useEffect, useState } from "react";
const Home = () => {
  const [expenses, setExpenses] = useState([]);
  const [openNewExpenseForm, setOpenNewExpenseForm] = useState(false);
  useEffect(() => {
    (async () => {
      const expenses = await getExpenses();
      setExpenses(expenses);
    })();
  }, []);
  const getExpenses = () => {
    return fetch(`/api/expenses`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((expenses) => {
        console.log(expenses);
        return expenses;
      });
  };
  const onAddNewExpense = ({ title, amount }) => {
    console.log(`adding new expense`);
    fetch(`/api/expenses/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        amount: amount,
      }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        const expenses = await getExpenses();
        setExpenses(expenses);
      })
      .catch((err) => console.error(err));
  };
  const editExpense = (id, { title, amount }) => {
    return fetch(`/api/expenses/edit/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        amount: amount,
      }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        const expenses = await getExpenses();
        setExpenses(expenses);
      });
  };
  const deleteExpense = (id) => {
    return fetch(`/api/expenses/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(async (data) => {
        const expenses = await getExpenses();
        setExpenses(expenses);
      });
  };
  return (
    <section className='flex flex-col align-items-center'>
      <div>
        <button
          type='button'
          className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
          onClick={() =>
            // onAddNewExpense({
            //   title: `new expense`,
            //   amount: 10,
            // })
            setOpenNewExpenseForm(true)
          }
        >
          <span>+ </span>
          Add Expense
        </button>
        <Expenses
          expenses={expenses}
          deleteExpense={deleteExpense}
          editExpense={editExpense}
        />
      </div>
      <NewExpenseFormModal
        showModal={openNewExpenseForm}
        setShowModal={setOpenNewExpenseForm}
        onSave={onAddNewExpense}
      />
    </section>
  );
};

export default Home;
