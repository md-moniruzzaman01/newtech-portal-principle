import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode, ButtonHTMLAttributes } from "react";

// _app page layout
export type AppPropsWithLayout = AppProps & {
  Component: NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
  };
};

// button props
export type ButtonProps = {
  className?: string;
  translate?: string;
  sizeClass?: string;
  fontSize?: string;
  //
  loading?: boolean;
  disabled?: boolean;
  secondary?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  href?: string;
  onClick?: () => void;
  children?: ReactNode;
  icon?: string;
};
// button props
export type CardProps = {
  className?: string;
  href?: string;
  children?: ReactNode;
};

// nav Data types
export interface singleMenuTypes {
  label: string;
  to?: string;
}

// nav Data types
export interface navDataTypes extends singleMenuTypes {
  subItems: singleMenuTypes[];
}
