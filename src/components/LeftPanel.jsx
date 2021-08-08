import "../css/leftPanel.css";
import logo from "../img/trackerlogo.png";
import { NavLink } from "react-router-dom";
import { useStateValue } from "../StateProvider";

const LeftPanel = ({ userBalance }) => {
  const [{ userDetails }] = useStateValue();
  return (
    <div className="left-panel">
      <div className="expense-tracker-heading">
        <img src={logo} alt="logo" />
        <h4>Expense Tracker</h4>
      </div>
      <div className="user-account-details">
        <img src={userDetails?.avatar} alt="profile" />
        <h5 className="userName my-2">{userDetails?.name}</h5>
        <div className="wallet-amount my-2">
          <i className="fa fa-credit-card mr-2"></i>
          <p className="m-0">$ {userBalance}</p>
        </div>
        <div className="links-for-differ-pages mt-4">
          <NavLink
            exact
            activeClassName="is-active"
            className="pageLink"
            to="/"
          >
            <p>Dashboard</p>
          </NavLink>
          <NavLink
            activeClassName="is-active"
            className="pageLink"
            to="/transactions"
          >
            <p>Transactions</p>
          </NavLink>
          <NavLink
            activeClassName="is-active"
            className="pageLink"
            to="/account"
          >
            <p>Account</p>
          </NavLink>
          <NavLink activeClassName="is-active" className="pageLink" to="/about">
            <p>About</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
