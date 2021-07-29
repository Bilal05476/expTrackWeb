import "../css/rightPanel.css";
import About from "./About";
import Dashboard from "./Dashboard";
import Transactions from "./Transactions";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";

const RightPanel = ({ userIncome, userExpense, userBalance }) => {
  // const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState("0.00");

  return (
    <div className="right-panel">
      <Switch>
        <Route exact path="/">
          <Dashboard
            income={userIncome}
            expense={userExpense}
            transactions={transactions}
            balance={userBalance}
          />
        </Route>
        <Route exact path="/transactions">
          <Transactions
            income={userIncome}
            expense={userExpense}
            balance={userBalance}
            transactions={transactions}
            setTransactions={setTransactions}
          />
        </Route>
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
};

export default RightPanel;
