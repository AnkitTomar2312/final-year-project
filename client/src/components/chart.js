import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const state = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [
    {
      label: "Class strength",
      backgroundColor: "rgba(219, 79, 142, 0.77)",
      borderColor: "rgba(219, 79, 79, 0.77)",
      borderWidth: 2,
      data: [38, 47, 19, 20, 40, 50, 39],
    },
  ],
};

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={state}
          options={{
            title: {
              display: true,
              text: "Class strength",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
    );
  }
}
