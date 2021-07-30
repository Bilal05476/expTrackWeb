import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import "../css/AddTrans.css";

export const AddTransaction = () => {
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [exp, setExp] = useState(false);
  const [inc, setInc] = useState(false);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      exp,
      inc,
      expense,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setExpense("");
    setAmount(0);
    setExp(false);
    setInc(false);
  };

  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <div className="amount-name">
          <label htmlFor="expense">Transaction Name</label>
          <input
            type="text"
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="amount-price">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
          <div className="inc-exp">
            <div className="income-div">
              <label htmlFor="inc">Income</label>
              <input
                type="checkbox"
                value={inc}
                checked={inc}
                onChange={(e) => setInc(e.currentTarget.checked)}
              />
            </div>
            <div className="expense-div">
              <label htmlFor="exp">Expense</label>
              <input
                type="checkbox"
                value={exp}
                checked={exp}
                onChange={(e) => setExp(e.currentTarget.checked)}
              />
            </div>
          </div>
        </div>

        {exp || inc ? (
          <button className="btn" type="submit">
            Add Transaction
          </button>
        ) : (
          <div className="disable-btn bg-secondary text-center">
            Add Transaction
          </div>
        )}
      </form>
    </>
  );
};
