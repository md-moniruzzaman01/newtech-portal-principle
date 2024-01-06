import type { Metadata } from "next";

import "../shared/styles/globals.css";
import DashboardSideBar from "@widgets/Dashboard side bar";
import DashboardHeader from "@widgets/Dashboard Header";

export const metadata: Metadata = {
  title: "Newtech Technology",
  description: "Always There for you",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="grid md:grid-cols-[110px,auto] lg:grid-cols-[220px,auto] xl:grid-cols-[260px,,auto] 3xl:grid-cols-[270px,auto] min-h-screen bg-[#F7F8FA]">
          <DashboardSideBar />

          {/* Dashboard Content --Start-- */}
          <div>
            <DashboardHeader />
            <div className="maxmd:max-w-[calc(360px+40px)] mx-auto px-5 md:p-[30px] 3xl:p-10">
              {children}
            </div>
          </div>
          {/* Dashboard Content --End-- */}
        </div>
      </body>
    </html>
  );
}
