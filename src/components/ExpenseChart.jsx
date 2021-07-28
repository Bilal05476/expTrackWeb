import { useState } from "react";
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
  const [chartData, setChartData] = useState(data);
  const [targetItem, setTargetItem] = useState("");
  //   const onChange = (targetItem) => {
  //     setTargetItem({ targetItem });
  //   };
  return (
    <Chart data={chartData}>
      <PieSeries valueField="val" argumentField="expense" innerRadius={0.6} />
      <Title text="Your Expense Chart" />
      <Animation />
      <EventTracker />
      <Tooltip />
    </Chart>
  );
}

// import * as React from 'react';
// import {
//   Chart,
//   BarSeries,
//   Title,
//   ArgumentAxis,
//   ValueAxis,
//   Tooltip,
// } from '@devexpress/dx-react-chart-bootstrap4';
// import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
// import { EventTracker } from '@devexpress/dx-react-chart';

// const data = [
//   { year: '1950', population: 2.525 },
//   { year: '1960', population: 3.018 },
//   { year: '1970', population: 3.682 },
//   { year: '1980', population: 4.440 },
//   { year: '1990', population: 5.310 },
//   { year: '2000', population: 6.127 },
//   { year: '2010', population: 6.930 },
// ];

// export default class Demo extends React.PureComponent {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data,
//       targetItem: undefined,
//     };

//     this.changeTargetItem = targetItem => this.setState({ targetItem });
//   }

//   render() {
//     const { data: chartData, targetItem } = this.state;

//     return (
//       <div className="card">
//         <Chart
//           data={chartData}
//         >
//           <ArgumentAxis />
//           <ValueAxis />

//           <BarSeries
//             valueField="population"
//             argumentField="year"
//           />
//           <Title
//             text="World population (billion)"
//           />
//           <EventTracker />
//           <Tooltip targetItem={targetItem} onTargetItemChange={this.changeTargetItem} />
//         </Chart>
//       </div>
//     );
//   }
// }
