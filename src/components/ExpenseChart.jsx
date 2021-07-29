import { Chart, Title, Tooltip } from "@devexpress/dx-react-chart-bootstrap4";
import "@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css";
import { Animation, EventTracker, PieSeries } from "@devexpress/dx-react-chart";
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const data = [
  { expense: "picnic", val: 101 },
  { expense: "studies", val: 72 },
];

export default function ExpenseChart() {
  const { userTransactions } = useContext(GlobalContext);
  const chartData = userTransactions;

  return (
    <Chart data={chartData}>
      <PieSeries valueField="amount" argumentField="text" innerRadius={0.5} />
      <Title text="Expense Chart" />
      <Animation />
      <EventTracker />
      <Tooltip />
    </Chart>
  );
}
