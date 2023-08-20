const addExpense = (expense) => {
  return fetch(`/api/expenses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(expense),
  }).then((res) => res.json());
};
export default addExpense;
