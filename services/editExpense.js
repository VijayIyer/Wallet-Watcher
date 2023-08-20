const editExpense = (id, expense) => {
  //   console.log(id);
  const { title, amount, currency, transactionDate } = expense;
  return fetch(`/api/expenses/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      amount,
      currency,
      transactionDate,
    }),
  }).then((res) => res.json());
};
export default editExpense;
