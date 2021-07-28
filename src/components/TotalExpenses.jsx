import React from "react";
import ExpenseChart from "./ExpenseChart";

const TotalExpenses = () => {
  return (
    <div className="col-12 total-expenses">
      <div className="expenses-header">
        <h5>Total Expenses</h5>
        <small>Jun 1 - Dec 1</small>
      </div>
      <div className="expenses-details row">
        <div className="expenses-chart col-md-6">
          <ExpenseChart />{" "}
        </div>
        <div className="transactions-history col-md-6">
          <div className="history-child mb-2">
            <div className="transaction-point"></div>
            <small className="transaction-name ml-2 mr-5">Rent</small>
            <small className="transaction-amount">$390</small>
          </div>
          <div className="history-child mb-2">
            <div className="transaction-point"></div>
            <small className="transaction-name ml-2 mr-5">Rent</small>
            <small className="transaction-amount">$390</small>
          </div>
          <div className="history-child mb-2">
            <div className="transaction-point"></div>
            <small className="transaction-name ml-2 mr-5">Rent</small>
            <small className="transaction-amount">$390</small>
          </div>
          <div className="history-child mb-2">
            <div className="transaction-point"></div>
            <small className="transaction-name ml-2 mr-5">Rent</small>
            <small className="transaction-amount">$390</small>
          </div>
          <div className="history-child mb-2">
            <div className="transaction-point"></div>
            <small className="transaction-name ml-2 mr-5">Rent</small>
            <small className="transaction-amount">$390</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalExpenses;
