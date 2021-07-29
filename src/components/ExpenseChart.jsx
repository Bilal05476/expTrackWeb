import {
  Chart,
  PieSeries,
  Title,
  Tooltip,
} from "@devexpress/dx-react-chart-bootstrap4";
import "@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css";
import { Animation, EventTracker } from "@devexpress/dx-react-chart";

const data = [
  { expense: "food", val: 41 },
  { expense: "picnic", val: 101 },
  { expense: "friends", val: 34 },
  { expense: "family", val: 59 },
  { expense: "studies", val: 72 },
  { expense: "activities", val: 35 },
];

export default function ExpenseChart() {
  const chartData = data;

  return (
    <Chart data={chartData}>
      <PieSeries valueField="val" argumentField="expense" innerRadius={0.6} />
      <Title text="Expense Chart" />
      <Animation />
      <EventTracker />
      <Tooltip />
    </Chart>
  );
}
