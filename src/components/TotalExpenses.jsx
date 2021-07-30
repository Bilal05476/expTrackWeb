import React from "react";
import ExpenseChart from "./ExpenseChart";
import TransactionsTable from "./TransactionsTable";
import { GlobalContext } from "../Context/GlobalState";
import { useContext } from "react";

const TotalExpenses = () => {
  const { userTransactions } = useContext(GlobalContext);

  return (
    <div className="col-12 total-expenses">
      <div className="expenses-header">
        <div>
          <h5>Total Expenses</h5>
          <small>Jun 1 - Dec 1</small>
        </div>
        <div className="sorting-div">21/6/2021 - 21/7/2021 📅</div>
      </div>
      <div className="expenses-details row">
        <div className="expenses-chart col-md-6">
          <ExpenseChart />{" "}
        </div>
        <div className="transactions-history col-md-6">
          <h5 className=" my-4">Transactions History</h5>
          {userTransactions.length !== 0 && (
            <table style={{ border: "1px solid #ccc" }}>
              <tr>
                <th style={{ border: "1px solid #ccc", padding: "2px 10px" }}>
                  Transaction Name
                </th>
                <th style={{ border: "1px solid #ccc", padding: "2px 10px" }}>
                  Transaction Amount
                </th>
              </tr>
              {userTransactions.map((transaction) => (
                // <Transaction key={transaction.id} transaction={transaction} />
                <TransactionsTable
                  key={transaction.id}
                  colorClass={
                    transaction.exp === true ? "bg-danger" : "bg-success"
                  }
                  transactionName={transaction.expense}
                  transactionAmount={transaction.amount}
                />
              ))}
            </table>
          )}
          {userTransactions.length === 0 && <small>No Record Found</small>}
        </div>
      </div>
    </div>
  );
};

export default TotalExpenses;
