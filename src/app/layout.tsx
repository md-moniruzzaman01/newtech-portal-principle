"use client";

// import type { Metadata } from "next";

import "../shared/styles/globals.css";
import DashboardSideBar from "@widgets/Dashboard side bar";
import DashboardHeader from "@widgets/Dashboard Header";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { UserAtom } from "@config/constants";
import { useRouter } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Newtech Technology",
//   description: "Always There for you",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [User, setUser] = useAtom(UserAtom);
  const [loading, setLoading] = useState(false);

  const GetUser = async () => {
    setLoading(true);
    fetch(`${process.env.API_URL}/api/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          setUser(data.result);
        } else {
          router.push("/login");
        }
        setLoading(false);
      });
  };

  useEffect(() => {
    GetUser();
  }, []);

  if (loading) {
    return (
      <html lang="en">
        <body>
          <main>
            <h1>Loading</h1>
          </main>
        </body>
      </html>
    );
  }
  return (
    <html lang="en">
      <body>
        <div className="grid md:grid-cols-[110px,auto] lg:grid-cols-[220px,auto] xl:grid-cols-[260px,,auto] 3xl:grid-cols-[270px,auto] min-h-screen bg-Light_gray">
          <DashboardSideBar />

          {/* Dashboard Content --Start-- */}
          <div>
            <DashboardHeader User={User.full_name} />
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
