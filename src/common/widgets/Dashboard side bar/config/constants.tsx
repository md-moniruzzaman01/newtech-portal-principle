import { icons } from "@libs/Icons";
import { DashboardSidebarLink } from "./Types";

export const dashboardSidebarLinks: DashboardSidebarLink[] = [
  {
    icon: icons.Dashboard,
    url: "/",
    text: "Dashboard",
    pageTitle: "Dashboard",
  },
  {
    icon: icons.list,
    url: "/complaints",
    text: "Complaints",
    pageTitle: "Complaints",
  },
  {
    icon: icons.user,
    url: "/profile",
    text: "Profile",
    pageTitle: "Profile",
  },
];
