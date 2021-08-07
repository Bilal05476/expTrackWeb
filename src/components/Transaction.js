import React, { useContext, useState, useEffect } from "react";
// import { db } from "../firebase";
import { GlobalContext } from "../Context/GlobalState";
// import { useStateValue } from "../StateProvider";

export const Transaction = ({ trans }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = trans.data.exp === true ? "-" : "+";

  //transactions state

  // const onDeleteTrans = (id) => {
  //   getTransFromDatabase.doc(id).delete();
  // };

  //allow user to delete only his transactions
  // const userIdForDeleteTransaction = user.uid.toString();

  console.log("transactions", trans);

  return (
    <li className={trans.data.exp === true ? "minus" : "plus"}>
      {trans.data.expense}{" "}
      <span>
        {sign}${Math.abs(trans.data.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(trans.data.id)}
        className="delete-btn"
      >
        <i className="fa fa-times"></i>
      </button>
    </li>
  );
};
