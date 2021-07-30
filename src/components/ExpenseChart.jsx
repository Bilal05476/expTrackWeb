import { Chart, Title, Tooltip } from "@devexpress/dx-react-chart-bootstrap4";
import "@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css";
import { Animation, EventTracker, PieSeries } from "@devexpress/dx-react-chart";
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export default function ExpenseChart() {
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

  const data = [
    { expense: "balance", amount: userBalance },
    { expense: "exp", amount: userExpense },
  ];

  return (
    <Chart data={data}>
      <PieSeries
        valueField="amount"
        argumentField="expense"
        innerRadius={0.5}
      />
      <Title text="Expense Chart" />
      <Animation />
      <EventTracker />
      <Tooltip />
    </Chart>
  );
}
