import AccountCardData from "./AccountCardData";
import TotalExpenses from "./TotalExpenses";
import { NavLink } from "react-router-dom";

const Dashboard = ({ income, expense, balance, userTransaction }) => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <strong className="mx-2">Dashboard</strong> /
        <NavLink
          activeClassName="is-active"
          className="breadCrumbLink mx-2"
          to="/transactions"
        >
          Transactions
        </NavLink>
        /
        <NavLink
          activeClassName="is-active"
          className="breadCrumbLink mx-2"
          to="/account"
        >
          Account
        </NavLink>
        /
        <NavLink
          activeClassName="is-active"
          className="breadCrumbLink mx-2"
          to="/about"
        >
          About
        </NavLink>
      </div>
      <div className="user-account-details-cards">
        <div className="card-deck">
          <AccountCardData
            amount={income}
            amountName="Income"
            amountClass="income"
          />
          <AccountCardData
            amount={expense}
            amountName="Expense"
            amountClass="expense"
          />
          <AccountCardData
            amount={balance}
            amountName="Balance"
            amountClass="balance"
          />
          <AccountCardData
            amount={userTransaction}
            amountName="Transactions"
            amountClass="transaction"
          />
        </div>
        <TotalExpenses />
      </div>
    </div>
  );
};

export default Dashboard;
