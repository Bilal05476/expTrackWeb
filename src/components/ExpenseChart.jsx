import { Chart, Title, Tooltip } from "@devexpress/dx-react-chart-bootstrap4";
import "@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css";
import { Animation, EventTracker, PieSeries } from "@devexpress/dx-react-chart";
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export default function ExpenseChart() {
  const { userTransactions } = useContext(GlobalContext);

  return (
    <Chart data={userTransactions}>
      <PieSeries
        valueField="amount"
        argumentField="expense"
        innerRadius={0.5}
        color="green"
      />
      <Title text="Expense Chart" />
      <Animation />
      <EventTracker />
      <Tooltip />
    </Chart>
  );
}
