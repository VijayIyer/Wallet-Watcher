import axios from "axios";

export async function getCurrencies() {
  const options = {
    method: "GET",
    url: "https://currency-converter5.p.rapidapi.com/currency/list",
    headers: {
      "X-RapidAPI-Key": process.env.CURRENCY_LIST_API_KEY,
      "X-RapidAPI-Host": "currency-converter5.p.rapidapi.com",
    },
  };

  try {
    console.log(`sending request to get currencies`);
    return axios.request(options);
  } catch (error) {
    console.error(error);
  }
}
export async function convertCurrency(from, to, amount) {
  const options = {
    method: "GET",
    url: "https://currency-converter5.p.rapidapi.com/currency/convert",
    params: {
      format: "json",
      from: from,
      to: to,
      amount: amount,
    },
    headers: {
      "X-RapidAPI-Key": process.env.CURRENCY_LIST_API_KEY,
      "X-RapidAPI-Host": "currency-converter5.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    return response.data.rates;
  } catch (error) {
    console.error(error);
  }
}
