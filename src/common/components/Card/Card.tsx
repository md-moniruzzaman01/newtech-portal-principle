import { cx } from "@config/constants";
import { CardProps } from "@config/types";
import Link from "next/link";
import { FC } from "react";

const Card: FC<CardProps> = ({ className = "", href, children }) => {
  const CLASSES =
    "w-full min-h-[10rem] rounded-lg px-4 mx-auto flex justify-center items-center text-center text-xl lg:text-3xl font-[500]";
  return (
    <div className={cx(CLASSES, className)}>
      <Link href={`${href}`}>
        {children || (
          <div className=" min-h-[10rem] flex justify-center items-center text-xl text-Dark">
            <p>This is Card</p>
          </div>
        )}
      </Link>
    </div>
  );
};

export default Card;
