import connectMongo from "@utils/connectToDb";
import { ExpenseModel } from "@models/expense";
export default async function handler(req, res) {
  await connectMongo();
  if (req.method === "DELETE") {
    try {
      const result = await ExpenseModel.deleteOne({ _id: req.query.id });
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  } else if (req.method === "PUT") {
    try {
      const expense = await ExpenseModel.findOneAndUpdate(
        {
          _id: req.query.id,
        },
        {
          title: req.body.title,
          amount: req.body.amount,
        }
      );

      const result = await expense.save();
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  } else if (req.method === "GET") {
    try {
      console.log(`this is the requested expense id - ${req.query.id}`);
      const expense = await ExpenseModel.findById(req.query.id);
      return res.status(200).json({
        title: expense.title,
        amount: expense.amount,
        transaction_date: expense.transaction_date,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  } else {
    res.status(422).send("req_method_not_supported");
  }
}
