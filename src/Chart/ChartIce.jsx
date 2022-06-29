import React from "react";
import "./chart.scss";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  CategoryScale,
  LinearScale,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

// ChartJs Register
ChartJS.register(
  Title,
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  LineElement
);

function ChartIce({
  elementDateValue,
  rangeMax,
  rangeMin,
  background,
  border1,
  border2,
  label1,
  label2,
}) {
  const Data = {
    labels: elementDateValue.slice(rangeMin, rangeMax).map((elem) => elem.year),
    datasets: [
      {
        label: label1,
        backgroundColor: [background],
        borderColor: border1,
        borderWidth: 1,
        data: elementDateValue.map((dateValue) => dateValue.area),
      },
      {
        label: label2,
        backgroundColor: [background],
        borderColor: border2,
        borderWidth: 1,
        data: elementDateValue.map((dateValue) => dateValue.extent),
      },
    ],
  };
  return (
    <div>
      <Line className="chart--data" data={Data} />
    </div>
  );
}

export default ChartIce;
