"use client";
import ProgressBar from "@components/progress bar";
import { useState } from "react";
import { IProductCount } from "../config/types";
import { calculatePercentages } from "../Helpers";

export default function ProgressBars({
  ProductCount,
  ProductCountTotal,
}: {
  ProductCount: IProductCount[];
  ProductCountTotal: number;
}) {
  const [progressStartValue1, setProgressStartValue1] = useState<number>(0);
  const [progressStartValue2, setProgressStartValue2] = useState<number>(0);
  const [progressStartValue3, setProgressStartValue3] = useState<number>(0);

  const { parcentage, count } = calculatePercentages(
    ProductCount,
    ProductCountTotal
  );
  return (
    <div className="flex flex-col md:flex-row  justify-between gap-5 w-full px-4">
      <ProgressBar
        title={`${count.successFull}`}
        subtitle="Succesful Order"
        progressCount={parcentage.successFull || 0}
        progressStartValue={progressStartValue1}
        setProgressStartValue={setProgressStartValue1}
      />
      <ProgressBar
        title={`${count.pending}`}
        subtitle="Pending Order"
        ProgressColor="#101250"
        progressCount={parcentage.pending || 0}
        progressStartValue={progressStartValue2}
        setProgressStartValue={setProgressStartValue2}
      />
      <ProgressBar
        title={`${count.unsuccessFull}`}
        subtitle="Unsuccesful Order"
        ProgressColor="#DD4B39"
        progressCount={parcentage.unsuccessFull || 0}
        progressStartValue={progressStartValue3}
        setProgressStartValue={setProgressStartValue3}
      />
    </div>
  );
}
