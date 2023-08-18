import connectMongo from "@utils/connectToDb";
import { ExpenseModel } from "@models/expense";
export default async function get(req, res) {
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
}
