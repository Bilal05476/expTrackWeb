import React, { useContext, useState, useEffect } from "react";
import { db } from "../firebase";

import { GlobalContext } from "../Context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  // const { userTransactions } = useContext(GlobalContext);
  const [userTransactions, setUserTransactions] = useState([]);
  const getTransFromDatabase = db.collection("transactions");
  useEffect(() => {
    getTransFromDatabase
      // .orderBy("transTime", `${sortingTrans}`)
      .onSnapshot((snapshot) =>
        setUserTransactions(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  });
  const deleteTransaction = () => {};

  return (
    <>
      <ul className="list mb-4">
        {userTransactions.map((trans, ind) => {
          console.log("trans", trans);
          const sign = trans.data.exp === true ? "-" : "+";
          <li key={ind} className={trans.data.exp === true ? "minus" : "plus"}>
            {trans.data.expense}
            <span>
              {sign}${Math.abs(trans.data.amount)}
            </span>
            <button
              onClick={() => deleteTransaction(trans.data.id)}
              className="delete-btn"
            >
              <i className="fa fa-times"></i>
            </button>
          </li>;
        })}
        {userTransactions.length === 0 && (
          <small className="text-center">No Record Found</small>
        )}
      </ul>
    </>
  );
};
