"use client";

//extarnal
import { usePathname } from "next/navigation";
import { useMemo } from "react";
//
import { icons } from "@libs/Icons";
import { dashboardSidebarLinks } from "@widgets/Dashboard side bar/config/constants";
import { cx } from "@config/constants";

export default function DashboardHeader({ User }: any) {
  const pathname = usePathname();
  const pageTitle = useMemo(
    () =>
      dashboardSidebarLinks.find((link) => link.url === pathname)?.pageTitle,
    [pathname]
  );

  const iconBtnStyle =
    "w-10 h-10 md:w-[60px] md:h-[60px] flex justify-center items-center outline-none border-none hover:bg-primary/5 rounded-md relative";

  return (
    <header className="px-5 md:px-[30px] 3xl:px-10 py-2 md:pt-[15px]  flex justify-between items-center flex-wrap maxmd:max-w-[calc(360px+40px)] maxmd:mx-auto">
      <div className="flex items-center gap-4 flex-wrap">
        <button
          className="md:hidden"
          //   onClick={() => setIsOpenMobileNav((prev: boolean) => !prev)}
        >
          {icons.MenuOpen}
        </button>
        <h3 className="text-[22px] md:text-[32px] font-semibold leading-[140%] text-[#2D2B2B]">
          {pageTitle || "Dashboard"}
        </h3>
      </div>

      <div className="flex items-center flex-wrap gap-5 md:gap-10">
        <div className="flex gap-2 md:gap-[25px]">
          <button className={iconBtnStyle}>
            <div className="w-[17px] h-[17px] rounded-full bg-[#FF0032] absolute top-0 right-0 md:top-4 md:right-3 flex items-center justify-center text-[13px] text-white">
              1
            </div>
            {icons.Bell}
          </button>
          <button className={cx(iconBtnStyle, "hidden md:flex")}>
            {icons.GearIcon}
          </button>
          <button className={cx(iconBtnStyle, "hidden md:flex")}>
            {icons.Question}
          </button>
        </div>

        {/* Profile Avatar --Start-- */}
        <div className="flex items-center gap-5 cursor-pointer">
          <div className="w-11 h-11 md:w-[50px] rounded-full border-2 border-primary md:h-[50px] bg-slate-200 relative flex justify-center items-center">
            <div className="text-2xl">{icons.user}</div>
          </div>
          <h2>{User}</h2>
        </div>

        {/* Profile Avatar --End-- */}
      </div>
    </header>
  );
}
