import connectMongo from "@utils/connectToDb";
import { ExpenseModel } from "@models/expense";
export default async function add(req, res) {
  if (req.method === "POST") {
    try {
      await connectMongo();
      const newExpense = new ExpenseModel(req.body);
      const newExpenseResult = await newExpense.save();
      res.status(201).json(newExpenseResult);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  } else {
    res.status(422).send("req_method_not_supported");
  }
}
