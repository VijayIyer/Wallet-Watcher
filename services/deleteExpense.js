const deleteExpense = (id) => {
  return fetch(`/api/expenses/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};
export default deleteExpense;
