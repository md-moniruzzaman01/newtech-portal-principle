"use client";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import { Chartdata } from "../Helpers";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export default function ChartSection({ ProductCount }: any) {
  const data = Chartdata(ProductCount);

  return (
    <>
      <PolarArea data={data} />
    </>
  );
}
