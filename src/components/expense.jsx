"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import EditExpenseFormModal from "@src/components/editExpenseForm";
import Link from "next/link";
const Expense = ({ expense, index, onDeleteExpense, onEditExpense }) => {
  // console.log(`rendering expense - ${expense.id}`);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(null);
  useEffect(() => {
    setTitle(expense.title);
    setAmount(expense.amount);
  }, [expense]);
  return (
    <>
      <div className='flex flex-row gap-5 m-5'>
        <>
          <div>{index + 1}.</div>
          <div>{title}</div>
          <div>{amount}</div>
        </>

        <button
          type='button'
          className='inline-flex items-center text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
          onClick={() => setEditing(true)}
        >
          <Image
            src={require(`../../public/edit-icon.svg`)}
            width={20}
            height={20}
            alt='Edit Expense'
          />
        </button>

        <button
          type='button'
          className='text-white inline-flex items-center bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
          onClick={() => {
            // console.log(`deleting expense id - ${expense.id}`);
            onDeleteExpense(expense.id);
          }}
        >
          <Image
            src={require(`../../public/delete-icon.svg`)}
            width={20}
            height={20}
            alt='Delete Expense'
          />
        </button>
        <Link href={`/expense-details/${expense.id}`}>
          <button
            type='button'
            className='inline-flex items-center text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
          >
            Details
          </button>
        </Link>
      </div>
      <EditExpenseFormModal
        data={expense}
        showModal={editing}
        setShowModal={setEditing}
        onSave={onEditExpense}
      />
    </>
  );
};

export default Expense;
