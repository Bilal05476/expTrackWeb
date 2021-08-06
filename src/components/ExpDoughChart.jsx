import { Doughnut } from "react-chartjs-2";
import { GlobalContext } from "../Context/GlobalState";
import { useContext } from "react";

const ExpDoughChart = ({
  userTransaction,
  userIncome,
  userExpense,
  userBalance,
}) => {
  const { userTransactions } = useContext(GlobalContext);
  const amounts = userTransactions.map((transaction) => transaction.amount);
  const transState = userTransactions.map((transaction) => transaction);

  // const userIncome = transState
  //   .filter((item) => item.inc === true)
  //   .reduce((acc, item) => (acc += item.amount), 0)
  //   .toFixed(2);

  // const userExpense = (
  //   transState
  //     .filter((item) => item.exp === true)
  //     .reduce((acc, item) => (acc += item.amount), 0) * 1
  // ).toFixed(2);

  // const userBalance = (
  //   parseFloat(userIncome) - parseFloat(userExpense)
  // ).toFixed(2);

  // const userTransaction = amounts
  //   .reduce((acc, item) => (acc += item), 0)
  //   .toFixed(2);

  const data = {
    labels: ["Income", "Expense", "Balance", "Transactions"],
    datasets: [
      {
        label: "Expense Chart",
        data: [userIncome, userExpense, userBalance, userTransaction],
        borderColor: [
          "rgba(25, 25, 255,0.2)",
          "rgba(255, 20, 8,0.2)",
          "rgba(25, 255, 6,0.2)",
          "rgba(5, 20, 255,0.2)",
        ],
        backgroundColor: ["blue", "crimson", "green", "rgb(47, 188, 235)"],
      },
    ],
  };

  return <Doughnut style={{ width: "97%" }} data={data} />;
};

export default ExpDoughChart;
