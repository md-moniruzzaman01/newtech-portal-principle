"use client";
import Brand from "@components/Brand";
import Button from "@components/Button";
import { cx } from "@config/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { dashboardSidebarLinks } from "./config/constants";

export default function DashboardSidebar() {
  const pathname = usePathname();
  return (
    <div
      className={cx(
        "w-full bg-[#263238] opacity-100 pointer-events-auto duration-150 static  h-auto z-[999]"
      )}
    >
      {/* <button
        className="absolute top-5 right-5 p-2 border border-primary rounded text-white md:hidden"
        onClick={() => setIsOpenMobileNav(false)}
      >

      </button> */}
      <div className=" flex justify-center my-4">
        <div className="max-w-[150px]">
          <Brand />
        </div>
      </div>

      {/* Sidebar Links --Start-- */}
      <ul className="space-y-2 grow overflow-auto h-[50vh]">
        {dashboardSidebarLinks.map(({ icon, url, text }, i) => {
          const isActive = pathname === url;
          return (
            <li key={i}>
              <Link href={url}>
                <p
                  // onClick={() => setIsOpenMobileNav(false)}
                  style={{
                    background: isActive
                      ? "linear-gradient(90deg, #0D71BA 0%, rgb(241 243 249 / 3%) 100%)"
                      : undefined,
                  }}
                  className={cx(
                    !isActive && "hover:sidebar_links_hover",
                    "flex items-center md:justify-center lg:justify-start gap-2.5 md:gap-[15px] pl-10 md:pl-0 lg:pl-5 xl:pl-7 py-[17px] text-white md:text-xl duration-100 relative"
                  )}
                >
                  {isActive && (
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#0D71BA] rounded-r-lg"></div>
                  )}
                  <span className="shrink-0 scale-[0.8] origin-left md:scale-100 inline-block">
                    {icon}
                  </span>
                  <span className="translate-y-px inline-block md:hidden lg:inline-block">
                    {text}
                  </span>
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
      {/* Sidebar Links --End-- */}

      {/* Logout Button --Start-- */}
      <div className="mt-[32px] md:mt-[200px] px-[25px] pb-8 md:pb-12">
        <Button
          className="w-full px-0 lg:px-5 py-[16px] md:py-3 lg:py-[16px] text-xl gap-2 bg-[#FF0032] btn-shadow"
          //   startIcon={<BiLogOut size={25} />}
        >
          <span className="inline-block md:hidden lg:inline-block">Logout</span>
        </Button>
      </div>
      {/* Logout Button --End-- */}
    </div>
  );
}
