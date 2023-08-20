import { useRouter } from "next/router";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import moment from "moment";

const ExpenseDetails = () => {
  const router = useRouter();
  const expenseId = router.query.id;
  const [details, setDetails] = useState(null);
  useEffect(() => {
    try {
      fetch(`/api/expenses/${expenseId}`)
        .then((res) => res.json())
        .then((data) => {
          setDetails(data);
        });
    } catch (err) {
      console.error(err);
    }
  }, []);
  return (
    <>
      <Link href={"/"}>
        <button
          type='button'
          className='m-5 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
        >
          Back
        </button>
      </Link>

      <div className='flex m-5 flex-col gap-2 align-items-center justify-center'>
        <div>Title: {details?.title}</div>
        <div>Amount : {details?.amount}</div>
        <div>
          Transaction Date:{" "}
          {details ? moment(details?.transaction_date).format("MMM Do YY") : ""}
        </div>
      </div>
    </>
  );
};

export default ExpenseDetails;
