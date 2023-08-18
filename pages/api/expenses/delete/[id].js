import connectMongo from "@utils/connectToDb";
import { ExpenseModel } from "@models/expense";
export default async function remove(req, res) {
  if (req.method === "DELETE") {
    try {
      await connectMongo();
      const result = await ExpenseModel.deleteOne({ _id: req.query.id });
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  } else {
    res.status(422).send("req_method_not_supported");
  }
}
