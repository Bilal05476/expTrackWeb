import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { userTransactions } = useContext(GlobalContext);

  return (
    <>
      <ul className="list mb-4">
        {userTransactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
        {userTransactions.length === 0 && (
          <small className="text-center">No Record Found</small>
        )}
      </ul>
    </>
  );
};
