import "../css/rightPanel.css";
import About from "./About";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Transactions from "./Transactions";
import { Switch, Route } from "react-router-dom";

const RightPanel = ({
  userIncome,
  userExpense,
  userBalance,
  userTransaction,
}) => {
  return (
    <div className="right-panel">
      <Switch>
        <Route exact path="/">
          <Dashboard
            income={userIncome}
            expense={userExpense}
            balance={userBalance}
            userTransaction={userTransaction}
          />
        </Route>
        <Route exact path="/transactions">
          <Transactions
            income={userIncome}
            expense={userExpense}
            balance={userBalance}
          />
        </Route>
        <Route exact path="/about" component={About} />
        <Route exact path="/account" component={Account} />
      </Switch>
    </div>
  );
};

export default RightPanel;
