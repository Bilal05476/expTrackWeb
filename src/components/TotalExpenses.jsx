import React from "react";
import ExpenseChart from "./ExpenseChart";
import TransactionsTable from "./TransactionsTable";

const TotalExpenses = () => {
  return (
    <div className="col-12 total-expenses">
      <div className="expenses-header">
        <div>
          <h5>Total Expenses</h5>
          <small>Jun 1 - Dec 1</small>
        </div>
        <div className="sorting-div"></div>
      </div>
      <div className="expenses-details row">
        <div className="expenses-chart col-md-6">
          <ExpenseChart />{" "}
        </div>
        <div className="transactions-history col-md-6">
          <h5 className=" my-4">Transactions History</h5>
          <table style={{ border: "1px solid #ccc" }}>
            <tr>
              <th style={{ border: "1px solid #ccc", padding: "2px 10px" }}>
                Transaction Name
              </th>
              <th style={{ border: "1px solid #ccc", padding: "2px 10px" }}>
                Transaction Amount
              </th>
            </tr>
            <TransactionsTable
              colorClass="bg-danger"
              transactionName="Picnic"
              transactionAmount="101"
            />
            <TransactionsTable
              colorClass="bg-info"
              transactionName="Studies"
              transactionAmount="72"
            />
            <TransactionsTable
              colorClass="bg-warning"
              transactionName="Family"
              transactionAmount="59"
            />
            <TransactionsTable
              colorClass="bg-primary"
              transactionName="Food"
              transactionAmount="41"
            />
            <TransactionsTable
              colorClass="bg-secondary"
              transactionName="Activities"
              transactionAmount="35"
            />
            <TransactionsTable
              colorClass="bg-success"
              transactionName="Friends"
              transactionAmount="34"
            />
          </table>
        </div>
      </div>
    </div>
  );
};

export default TotalExpenses;
