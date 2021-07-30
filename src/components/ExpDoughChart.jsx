import { Doughnut } from "react-chartjs-2";
import { GlobalContext } from "../Context/GlobalState";
import { useContext } from "react";

const ExpDoughChart = () => {
  const { userTransactions } = useContext(GlobalContext);
  const transState = userTransactions.map((transaction) => transaction);

  const userIncome = transState
    .filter((item) => item.inc === true)
    .reduce((acc, item) => (acc += item.amount), 0)
    .toFixed(2);

  const userExpense = (
    transState
      .filter((item) => item.exp === true)
      .reduce((acc, item) => (acc += item.amount), 0) * 1
  ).toFixed(2);

  const userBalance = (
    parseFloat(userIncome) - parseFloat(userExpense)
  ).toFixed(2);
  const data = {
    labels: ["Balance", "Expense"],
    datasets: [
      {
        label: "Expense Chart",
        data: [userBalance, userExpense],
        borderColor: ["rgba(25, 255, 6,0.2)", "rgba(255, 20, 8,0.2)"],
        backgroundColor: ["green", "crimson"],
      },
    ],
  };

  return <Doughnut data={data} />;
};

export default ExpDoughChart;
