import { Doughnut } from "react-chartjs-2";

const ExpDoughChart = ({
  userTransaction,
  userIncome,
  userExpense,
  userBalance,
}) => {
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
