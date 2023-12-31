import React, { useEffect, useState } from "react";
export default function Modal({
  showModal,
  setShowModal,
  onSave,
  allowedCurrencies,
}) {
  const [title, setTitle] = useState(null);
  const [amount, setAmount] = useState(null);
  const [currency, setCurrency] = useState(null);
  const [transactionDate, setTransactionDate] = useState(null);
  return (
    <>
      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-3xl'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*header*/}
                <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                  <h3 className='text-3xl font-semibold'>New Expense</h3>
                  <button
                    className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                    onClick={() => setShowModal(false)}
                  >
                    <span className='bg-black text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                      X
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form className='p-3'>
                  <div className='flex flex-col gap-5'>
                    <div className='flex gap-3'>
                      <label>Title :</label>
                      <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        style={{
                          paddingLeft: "10px",
                        }}
                      />
                    </div>
                    <div className='flex gap-3'>
                      <label>Amount : </label>
                      <input
                        type='number'
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        style={{
                          paddingLeft: "10px",
                        }}
                      />
                    </div>

                    <div className='flex gap-3'>
                      <label>Currency :</label>
                      <select
                        name='selectCurrency'
                        id='selectCurrency'
                        value={currency ?? ""}
                        onChange={(e) => {
                          console.log(e.target.value);
                          setCurrency(e.target.value);
                        }}
                      >
                        {allowedCurrencies.map((currency) => {
                          return (
                            <option
                              key={currency.symbol}
                              value={currency.symbol}
                            >
                              {currency.symbol}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className='flex gap-3'>
                      <label>Transaction Date :</label>
                      <input
                        type='date'
                        onChange={(e) => setTransactionDate(e.target.value)}
                        value={transactionDate ?? ""}
                      />
                    </div>
                  </div>
                </form>
                {/*footer*/}
                <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                  <button
                    className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    disabled={!title || !amount}
                    className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={(e) => {
                      e.preventDefault();
                      setShowModal(false);
                      onSave({ title, amount, currency, transactionDate });
                      setTitle(null);
                      setAmount(null);
                      setCurrency(null);
                      setTransactionDate(null);
                    }}
                  >
                    Add Expense
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
}
