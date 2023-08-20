import connectMongo from "@utils/connectToDb";
import { ExpenseModel } from "@models/expense";
export default async function get(req, res) {
  if (req.method === "POST") {
    try {
      await connectMongo();
      const { title, amount, currency, transactionDate } = req.body;
      const newExpense = new ExpenseModel({
        title: title,
        amount,
        currency,
        transaction_date: transactionDate,
      });
      const newExpenseResult = await newExpense.save();
      res.status(201).json(newExpenseResult);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  } else if (req.method === "GET") {
    try {
      await connectMongo();
      const expenses = await ExpenseModel.find();
      res.status(200).json(
        expenses.map((expense) => {
          return {
            title: expense.title,
            amount: expense.amount,
            id: expense._id,
          };
        })
      );
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(422).send("req_method_not_supported");
  }
}
