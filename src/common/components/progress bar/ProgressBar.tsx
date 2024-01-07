"use client";

import { useEffect, FC, Dispatch, SetStateAction, useRef } from "react";
import styles from "../../../shared/styles/progressbar.module.css";

type progressBarProps = {
  progressCount: number;
  speed?: number;
  progressStartValue: number;
  setProgressStartValue: Dispatch<SetStateAction<number>>;
  title: string;
  subtitle: string;
  ProgressColor?: string;
};

const ProgressBar: FC<progressBarProps> = ({
  progressCount,
  speed = 100,
  progressStartValue = 0,
  setProgressStartValue,
  title,
  subtitle,
  ProgressColor = "#0DADE0",
}) => {
  const circularProgressRef = useRef<HTMLDivElement>(null);
  const progressValueRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const circularProgress = circularProgressRef.current;
    const progressValue = progressValueRef.current;

    const progress = setInterval(() => {
      setProgressStartValue((prevValue) => {
        const nextValue = prevValue + 1;

        if (progressValue) {
          progressValue.textContent = `${nextValue}%`;
        }

        if (circularProgress) {
          circularProgress.style.background = `conic-gradient(${ProgressColor} ${
            nextValue * 3.6
          }deg, #ededed 0deg)`;
        }

        if (nextValue === progressCount) {
          clearInterval(progress);
        }

        return nextValue;
      });
    }, speed);

    return () => clearInterval(progress);
  }, [progressCount]);

  return (
    <div className=" relative w-full my-7 md:my-4 rounded-lg shadow-md bg-slate-500 flex justify-between items-center text-2xl px-4 text-custom_white h-24">
      <div></div>

      <div className="text-end">
        <h3 className="font-[600]">{title}</h3>
        <p className="text-lg">{subtitle}</p>
      </div>
      <div className=" absolute top-[-17px] left-6">
        <div ref={circularProgressRef} className={styles.circularProgress}>
          <span ref={progressValueRef} className={styles.progressValue}>
            0%
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
