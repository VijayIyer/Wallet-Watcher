import mongoose from "mongoose";
import { getCurrencies, convertCurrency } from "./currency";
import { CurrencyModel } from "@models/currency";

const connectMongo = async () => {
  return mongoose.connect(process.env.MONGODB_URI).then(async () => {
    const numSavedCurrencies = await CurrencyModel.find();

    if (Object.keys(numSavedCurrencies).length === 0) {
      let currencies = [];
      currencies = (await getCurrencies()).data.currencies;
      await Promise.all(
        Object.keys(currencies).map(async (currency) => {
          console.log(
            `this is the currency - ${currency}: ${currencies[currency]}`
          );
          const doesCurrencyExist = await CurrencyModel.findOne({
            symbol: currency,
          });
          console.log(`does this currency exist ? - ${!!doesCurrencyExist}`);
          if (!doesCurrencyExist) {
            const newCurrency = new CurrencyModel({
              name: currencies[currency],
              symbol: currency,
            });
            await newCurrency.save();
          }
        })
      );
    }
  });
};

export default connectMongo;
