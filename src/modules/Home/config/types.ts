// welcome section

import { ReactNode } from "react";

export interface welcomeCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}
export interface IProductCount {
  _id: string;
  count: number;
}

export interface IPercentages {
  parcentage: {
    successFull: number;
    pending: number;
    unsuccessFull: number;
  };
  count: {
    successFull: number;
    pending: number;
    unsuccessFull: number;
  };
}
