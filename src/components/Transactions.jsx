import { useState } from "react";

const Transactions = () => {
  const [addIncome, setAddIncome] = useState(0);
  const [addExpense, setAddExpense] = useState(0);

  const handleIncome = (e) => {
    e.preventDefault();
  };
  const handleExpense = (e) => {
    e.preventDefault();
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <strong>Transactions</strong>
      </div>
      <form onSubmit={handleIncome}>
        <h5>Add Transaction</h5>
        {/* <input type="text" /> */}
        <input
          value={addIncome}
          onChange={(e) => setAddIncome(e.target.value)}
          type="number"
        />
        <button type="submit">Add Income</button>
      </form>
      <form onSubmit={handleExpense}>
        <h5>Add Transaction</h5>
        {/* <input type="text" /> */}
        <input
          value={addExpense}
          onChange={(e) => setAddExpense(e.target.value)}
          type="number"
        />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default Transactions;
