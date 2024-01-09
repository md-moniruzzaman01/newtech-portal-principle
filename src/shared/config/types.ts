import exp from "constants";
import { NextPage } from "next";
import { AppProps } from "next/app";
import {
  ReactElement,
  ReactNode,
  ButtonHTMLAttributes,
  Dispatch,
  SetStateAction,
} from "react";

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

//seach input box props
export type SearchInputProps = {
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  placeholder?: string;
};
export type SearchInputBoxProps = SearchInputProps & PassSetStatusProps;

export type PassSetStatusProps = {
  SetState: Dispatch<SetStateAction<string>>;
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

export type userDataProps = {
  _id: string;
  Skill: string[];
  mobile_number: string;
  full_name: string;
  user_name: string;
  image?: string;
  team: string;
  asp?: string;
  email: string;
  branch?: string;
  company?: string;
};
