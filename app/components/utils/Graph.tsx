"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Chart as chartJs,
} from "chart.js";

chartJs.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const data = {
  labels: ["Total paid", "Balance remaining"],
  datasets: [
    {
      label: "total paid",
      data: [1870.47, 6129.17],
      backgroundColor: [
        "rgba(35,111,27,1.00)", // Green: Using (R, G, B) = (0, 128, 0) for green 0, 100, 0, 0.2, 35,111,27,1.00
        "rgba(128, 128, 128, 0.2)", // Gray: Using (R, G, B) = (128, 128, 128) for gray
      ],
    },
  ],
};
export const Graph = () => {
  return <Doughnut data={data} />;
};
