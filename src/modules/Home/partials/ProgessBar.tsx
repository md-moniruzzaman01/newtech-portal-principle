"use client";
import ProgressBar from "@components/progress bar";
import { useState } from "react";

export default function ProgressBars() {
  const [progressStartValue1, setProgressStartValue1] = useState<number>(0);
  const [progressStartValue2, setProgressStartValue2] = useState<number>(0);
  const [progressStartValue3, setProgressStartValue3] = useState<number>(0);
  return (
    <div className="flex flex-col md:flex-row  justify-between gap-5 w-full px-4">
      <ProgressBar
        title="650"
        subtitle="Succesful Order"
        progressCount={65}
        progressStartValue={progressStartValue1}
        setProgressStartValue={setProgressStartValue1}
      />
      <ProgressBar
        title="586"
        subtitle="Pending Order"
        ProgressColor="#101250"
        progressCount={60}
        progressStartValue={progressStartValue2}
        setProgressStartValue={setProgressStartValue2}
      />
      <ProgressBar
        title="65"
        subtitle="Unsuccesful Order"
        ProgressColor="#DD4B39"
        progressCount={5}
        progressStartValue={progressStartValue3}
        setProgressStartValue={setProgressStartValue3}
      />
    </div>
  );
}
