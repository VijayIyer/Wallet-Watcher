import { ExpenseModel } from "@models/expense";
import Expenses from "@src/components/expenses";
import NewExpenseFormModal from "@src/components/newExpenseForm";
import connectMongo from "@utils/connectToDb";
import { useEffect, useMemo, useState } from "react";
import getExpenses from "@services/getExpenses";
import editExpense from "@services/editExpense";
import deleteExpense from "@services/deleteExpense";
import addExpense from "@services/addExpense";
import { CurrencyModel } from "@models/currency";
export async function getServerSideProps() {
  await connectMongo();
  const expenses = await ExpenseModel.find();
  const allowedCurrencies = await CurrencyModel.find();
  return {
    props: {
      expenses: JSON.parse(
        JSON.stringify(
          expenses.map((expense) => ({
            title: expense.title,
            amount: expense.amount,
            id: expense._id,
          }))
        )
      ),
      allowedCurrencies: JSON.parse(
        JSON.stringify(
          allowedCurrencies.map((currency) => ({
            name: currency.name,
            symbol: currency.symbol,
          }))
        )
      ),
    },
  };
}
const Home = (props) => {
  const [expenses, setExpenses] = useState(props.expenses);
  const [showNewExpenseModal, setShowNewExpenseModal] = useState(false);
  const total = useMemo(
    () => expenses.reduce((total, expense) => total + expense.amount, 0),
    [expenses]
  );
  const onAddNewExpense = async (expense) => {
    await addExpense(expense);
    const data = await getExpenses();
    setExpenses(data);
  };
  const onEditExpense = async (id, expense) => {
    await editExpense(id, expense);
    const data = await getExpenses();
    setExpenses(data);
  };
  const onDeleteExpense = async (id) => {
    await deleteExpense(id);
    const data = await getExpenses();
    setExpenses(data);
  };

  return (
    <section className='flex flex-col align-items-center ml-5'>
      <div className='flex gap-5 align-items-center'>
        <div>
          <button
            type='button'
            className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
            onClick={() => setShowNewExpenseModal(true)}
          >
            <span>+ </span>
            Add Expense
          </button>
        </div>

        <div>
          <span>Total : </span>
          <span>{total}</span>
        </div>
      </div>
      <Expenses
        expenses={expenses}
        onDeleteExpense={onDeleteExpense}
        onEditExpense={onEditExpense}
      />
      <NewExpenseFormModal
        showModal={showNewExpenseModal}
        setShowModal={setShowNewExpenseModal}
        onSave={onAddNewExpense}
        allowedCurrencies={props.allowedCurrencies}
      />
    </section>
  );
};

export default Home;
