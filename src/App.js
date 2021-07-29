import "@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css";
import { BrowserRouter as Router } from "react-router-dom";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import { useContext } from "react";
import { GlobalContext } from "./Context/GlobalState";

function App() {
  const { userTransactions } = useContext(GlobalContext);
  console.log(userTransactions);
  const amounts = userTransactions.map((transaction) => transaction.amount);
  const userBalance = amounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const userIncome = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  console.log(userIncome);
  const userExpense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  const userTransaction = parseFloat(userIncome) + parseFloat(userExpense);
  return (
    <div className="project-view">
      <Router>
        <LeftPanel userBalance={userBalance} />
        <RightPanel
          userIncome={userIncome}
          userExpense={userExpense}
          userBalance={userBalance}
          userTransaction={userTransaction}
        />
      </Router>
    </div>
  );
}

export default App;
