import connectMongo from "@utils/connectToDb";
import { ExpenseModel } from "@models/expense";
export default async function edit(req, res) {
  if (req.method === "PUT") {
    try {
      await connectMongo();
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
  } else {
    res.status(422).send("req_method_not_supported");
  }
}
