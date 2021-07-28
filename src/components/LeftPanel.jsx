import "../css/leftPanel.css";
import logo from "../img/trackerlogo.png";
import wallet from "../img/wallet-icon.png";
import { NavLink } from "react-router-dom";

const LeftPanel = () => {
  return (
    <div className="left-panel">
      <div className="expense-tracker-heading">
        <img src={logo} alt="logo" />
        <h4>Expense Tracker</h4>
      </div>
      <div className="user-account-details">
        <img src={logo} alt="profile" />
        <h5 className="userName my-2">UserName</h5>
        <div className="wallet-amount my-2">
          <img src={wallet} alt="wallet" />
          <p className="m-0">$ 5,240</p>
        </div>
        <div className="links-for-differ-pages mt-4">
          <NavLink to="/">
            <a>Dashboard</a>
          </NavLink>
          <NavLink to="/transactions">
            <a>Transactions</a>
          </NavLink>
          <NavLink to="/about">
            <a>About</a>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
