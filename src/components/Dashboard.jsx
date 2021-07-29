import AccountCardData from "./AccountCardData";
import TotalExpenses from "./TotalExpenses";

const Dashboard = ({ income, expense, balance, transactions }) => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <strong>Dashboard</strong>
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
            amount={transactions}
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
