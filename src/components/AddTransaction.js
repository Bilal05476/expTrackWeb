import React, { useState } from "react";
import "../css/AddTrans.css";
import { useStateValue } from "../StateProvider";
import { db } from "../firebase";
import firebase from "firebase";

export const AddTransaction = () => {
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [exp, setExp] = useState(false);
  const [inc, setInc] = useState(false);
  const [{ user }] = useStateValue();

  const addTransInDatabase = db.collection("transactions");
  const updateTransInDatabase = db.collection("users").doc(user.uid);
  console.log(updateTransInDatabase);
  const onSubmit = (e) => {
    e.preventDefault();
    addTransInDatabase.add({
      id: user.uid,
      exp,
      inc,
      expense,
      amount: +amount,
      transTime: firebase.firestore.Timestamp.fromDate(new Date()),
    });
    if (exp) {
      const incrementExp = firebase.firestore.FieldValue.increment(+amount);
      updateTransInDatabase.update({
        expense: incrementExp,
      });
    } else if (inc) {
      const incrementInc = firebase.firestore.FieldValue.increment(+amount);
      updateTransInDatabase.update({
        income: incrementInc,
      });
    }

    // addTransaction(newTransaction);
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

        {(inc || exp) && (!inc || !exp) ? (
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
