import { model, models, Schema } from "mongoose";
const CurrencySchema = new Schema({
  name: {
    type: String,
    default: "United States dollar",
    required: true,
  },
  symbol: {
    type: String,
    default: "USD",
    required: true,
    unique: true,
  },
  rate: Number,
});

const CurrencyModel = models.Currency || model("Currency", CurrencySchema);
export { CurrencyModel };
