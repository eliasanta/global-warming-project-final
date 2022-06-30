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

function ChartCo2({
  elementDateValue,
  rangeMax,
  rangeMin,
  background,
  border,
  label,
}) {
  const Data = {
    labels: elementDateValue.slice(rangeMin, rangeMax).map((elem) => elem.year),
    datasets: [
      {
        label: label,
        backgroundColor: [background],
        borderColor: border,
        borderWidth: 1,
        data: elementDateValue.map((dateValue) => dateValue.cycle),
      },
    ],
  };
  return (
    <div>
      <Line data={Data} />
    </div>
  );
}

export default ChartCo2;
