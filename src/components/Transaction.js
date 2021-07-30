import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.exp === true ? "-" : "+";
  return (
    <li className={transaction.exp === true ? "minus" : "plus"}>
      {transaction.expense}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        <i className="fa fa-times"></i>
      </button>
    </li>
  );
};
