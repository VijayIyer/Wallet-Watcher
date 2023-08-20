const getExpenses = () => {
  return fetch(`/api/expenses`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((expenses) => {
      return expenses;
    });
};
export default getExpenses;
