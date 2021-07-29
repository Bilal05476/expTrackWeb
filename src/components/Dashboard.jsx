import AccountCardData from "./AccountCardData";
import TotalExpenses from "./TotalExpenses";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <strong>Dashboard</strong>
      </div>
      <div className="user-account-details-cards">
        <div className="card-deck">
          <AccountCardData
            amount="1000"
            amountName="Income"
            amountClass="income"
          />
          <AccountCardData
            amount="342"
            amountName="Expense"
            amountClass="expense"
          />
          <AccountCardData
            amount="658"
            amountName="Balance"
            amountClass="balance"
          />
          <AccountCardData
            amount="1342"
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
