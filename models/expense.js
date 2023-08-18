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
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const ExpenseModel = models.Expense || model("Expense", ExpenseSchema);
export { ExpenseModel };
