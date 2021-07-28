import React from "react";
import ExpenseChart from "./ExpenseChart";

const TotalExpenses = () => {
  return (
    <div className="col-12 total-expenses">
      <div className="expenses-header">
        <h5>Total Expenses</h5>
        <small>Jun 1 - Dec 1</small>
      </div>
      <div className="expenses-details">
        <div className="expenses-chart">
          <ExpenseChart />{" "}
        </div>
        <div className="transactions-history">History</div>
      </div>
    </div>
  );
};

export default TotalExpenses;
