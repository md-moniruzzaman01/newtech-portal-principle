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
    url: "/contact",
    text: "Contact",
    pageTitle: "Contact",
  },
  {
    icon: icons.user,
    url: "/about",
    text: "About",
    pageTitle: "About",
  },
];
