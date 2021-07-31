import { AddTransaction } from "./AddTransaction";
import { TransactionList } from "./TransactionList";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Transactions = () => {
  const [addTrans, setAddTrans] = useState(false);
  const [historyTrans, setHistoryTrans] = useState(false);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <NavLink
          activeClassName="is-active"
          className="breadCrumbLink mx-2"
          to="/"
        >
          Dashboard
        </NavLink>
        /<strong className="mx-2">Transactions</strong>
      </div>
      <div className="row transactions-page-view">
        <div className="col-md-6">
          <div
            className="btn mt-4"
            onClick={() => setHistoryTrans(!historyTrans)}
          >
            {historyTrans ? (
              <div className="transaction-toggle-btn">
                <small>Hide Transactions</small>
                <i className="mx-2 fa fa-caret-up"></i>
              </div>
            ) : (
              <div className="transaction-toggle-btn">
                <small>Show Transactions</small>
                <i className="mx-2 fa fa-caret-down"></i>
              </div>
            )}
          </div>
          {historyTrans && <TransactionList />}
        </div>
        <div className="col-md-6">
          <div className="btn mt-4" onClick={() => setAddTrans(!addTrans)}>
            {addTrans ? (
              <div className="transaction-toggle-btn">
                <small>Close</small>
                <i className="mx-2 fa fa-caret-up"></i>
              </div>
            ) : (
              <div className="transaction-toggle-btn">
                <small>Add Transaction</small>
                <i className="mx-2 fa fa-caret-down"></i>
              </div>
            )}
          </div>
          {addTrans && <AddTransaction />}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
