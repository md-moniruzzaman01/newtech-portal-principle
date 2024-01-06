import Image from "next/image";
import React from "react";
//
import { logo } from "@config/constants";

const Brand = () => {
  return (
    <div className="max-w-[140px]">
      <Image
        src={logo}
        width={1}
        height={0.22}
        alt="Newtech technology"
        layout="responsive"
      />
    </div>
  );
};

export default Brand;
