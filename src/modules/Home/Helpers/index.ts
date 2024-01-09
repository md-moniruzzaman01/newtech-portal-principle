import { IPercentages, IProductCount } from "../config/types";

export const Chartdata = (ProductCount: IProductCount[]) => {
  const labels = ProductCount.map((item) => item._id);
  const data = ProductCount.map((item) => item.count);
  const labelColorMap: { [key: string]: string } = {
    Received: "rgba(60, 179, 113, 0.5)",
    "Engineer Is working": "rgba(255, 99, 132, 0.5)",
    Completed: "rgba(54, 162, 235, 0.5)",
    Buffer: "rgba(255, 206, 86, 0.5)",
    "Not Repairable": "rgba(153, 102, 255, 0.5)",
    QC: "rgba(255, 159, 64, 0.5)",
    CN: "rgba(255, 99, 71, 0.5)",
    "Repair Difficulty": "rgba(255, 0, 0, 0.5)",
    "Leak material": "rgba(255, 165, 0, 0.5)",
    Other: "rgba(255, 159, 64, 0.5)",
  };
  const backgroundColors = labels.map(
    (label) => labelColorMap[label] || "rgba(0, 0, 0, 0.5)"
  ); // Default color for unknown labels
  const borderWidth = 1;
  return {
    labels: labels,
    datasets: [
      {
        label: "Complaints of count",
        data: data,
        backgroundColor: backgroundColors,
        borderWidth: borderWidth,
      },
    ],
  };
};

export const calculatePercentages = (
  ProductCount: IProductCount[],
  ProductCountTotal: number
): IPercentages => {
  const counts: Record<string, number> = ProductCount.reduce((acc, item) => {
    acc[item._id] = item.count;
    return acc;
  }, {} as Record<string, number>);

  // Calculate percentages
  const total: number = ProductCountTotal;
  const successFull: number = (counts.Completed || 0) + (counts.QC || 0);
  const pending: number =
    (counts.Received || 0) + (counts.QC || 0) + (counts.Repaired || 0);
  const unsuccessFull: number =
    (counts.Cancel || 0) +
    (counts.Reject || 0) +
    (counts["Not Repairable"] || 0) +
    (counts["Leak material"] || 0) +
    (counts["Repair Difficulty"] || 0);

  const successFullPercentage: number = Math.floor((successFull / total) * 100);
  const pendingPercentage: number = Math.floor((pending / total) * 100);
  const unsuccessFullPercentage: number = Math.floor(
    (unsuccessFull / total) * 100
  );
  return {
    parcentage: {
      successFull: successFullPercentage,
      pending: pendingPercentage,
      unsuccessFull: unsuccessFullPercentage,
    },
    count: {
      successFull,
      pending,
      unsuccessFull,
    },
  };
};
