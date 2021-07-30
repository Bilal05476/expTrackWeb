import { AddTransaction } from "./AddTransaction";
import { TransactionList } from "./TransactionList";
import { useState } from "react";

const Transactions = () => {
  const [addTrans, setAddTrans] = useState(false);
  const [historyTrans, setHistoryTrans] = useState(false);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <strong>Transactions</strong>
      </div>
      <div className="btn mt-4" onClick={() => setHistoryTrans(!historyTrans)}>
        {historyTrans ? "Hide Transactions" : "Show Transactions"}
      </div>
      {historyTrans && <TransactionList />}
      <div className="btn" onClick={() => setAddTrans(!addTrans)}>
        {addTrans ? "Close" : "Add Transaction"}
      </div>

      {addTrans && <AddTransaction />}
    </div>
  );
};

export default Transactions;
