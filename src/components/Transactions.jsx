import { AddTransaction } from "./AddTransaction";
import { TransactionList } from "./TransactionList";
const Transactions = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <strong>Transactions</strong>
      </div>
      <TransactionList />
      <AddTransaction />
    </div>
  );
};

export default Transactions;
