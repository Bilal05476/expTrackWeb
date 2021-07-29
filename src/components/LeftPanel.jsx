import "../css/leftPanel.css";
import logo from "../img/trackerlogo.png";
import profile from "../img/profile.jpg";
import { NavLink } from "react-router-dom";

const LeftPanel = () => {
  return (
    <div className="left-panel">
      <div className="expense-tracker-heading">
        <img src={logo} alt="logo" />
        <h4>Expense Tracker</h4>
      </div>
      <div className="user-account-details">
        <img src={profile} alt="profile" />
        <h5 className="userName my-2">Bilal Ahmed</h5>
        <div className="wallet-amount my-2">
          💳
          <div className="mx-1"></div>
          <p className="m-0">$ 658</p>
        </div>
        <div className="links-for-differ-pages mt-4">
          <NavLink className="pageLink" to="/">
            <p
              style={{
                background: "linear-gradient(to left, #4360a1, #224997)",
                color: "#fff",
              }}
            >
              Dashboard
            </p>
          </NavLink>
          <NavLink className="pageLink" to="/transactions">
            <p>Transactions</p>
          </NavLink>
          <NavLink className="pageLink" to="/about">
            <p>About</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
