import AccountCardData from "./AccountCardData";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <strong>Dashboard</strong>
      </div>
      <div className="user-account-details-cards">
        <AccountCardData
          amount="44,330"
          amountName="Income"
          amountClass="income"
        />
        <AccountCardData
          amount="44,330"
          amountName="Expense"
          amountClass="expense"
        />
        <AccountCardData
          amount="44,330"
          amountName="Balance"
          amountClass="balance"
        />
        <AccountCardData
          amount="44,330"
          amountName="Transactions"
          amountClass="transaction"
        />
      </div>
    </div>
  );
};

export default Dashboard;
