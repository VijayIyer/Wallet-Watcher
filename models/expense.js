import { model, models, Schema } from "mongoose";
const ExpenseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

const ExpenseModel = model("Expense", ExpenseSchema);
export { ExpenseModel };
