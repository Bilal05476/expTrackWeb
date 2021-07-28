import AccountCardData from "./AccountCardData";

const Transactions = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <strong>Transactions</strong>
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
      </div>
    </div>
  );
};

export default Transactions;
