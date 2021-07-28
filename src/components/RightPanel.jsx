import "../css/rightPanel.css";
import About from "./About";
import Dashboard from "./Dashboard";
import Transactions from "./Transactions";
import { Switch, Route } from "react-router-dom";

const RightPanel = () => {
  return (
    <div className="right-panel">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/transactions" component={Transactions} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
};

export default RightPanel;
