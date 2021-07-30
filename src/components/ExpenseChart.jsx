import { Chart, Title, Tooltip } from "@devexpress/dx-react-chart-bootstrap4";
import "@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css";
import { Animation, EventTracker, PieSeries } from "@devexpress/dx-react-chart";
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export default function ExpenseChart() {
  const { userTransactions } = useContext(GlobalContext);
  const transState = userTransactions.map((transaction) => transaction);
  const colorState = transState.map((item) => item.exp);
  console.log(colorState);
  return (
    <Chart
      // color={colorState.filter((item) => (item === true ? "crimson" : "green"))}
      data={userTransactions}
    >
      <PieSeries
        valueField="amount"
        argumentField="expense"
        innerRadius={0.5}
        color={"exp" === true ? "crimson" : "green"}
      />
      <Title text="Expense Chart" />
      <Animation />
      <EventTracker />
      <Tooltip />
    </Chart>
  );
}
