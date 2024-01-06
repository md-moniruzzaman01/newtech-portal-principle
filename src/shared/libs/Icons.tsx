// import icons
import {
  FaCaretDown,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaCog,
  FaQuestion,
  FaBell,
  FaRegUser,
  FaFileInvoice,
} from "react-icons/fa";

import { IoMdClose, IoMdList } from "react-icons/io";
import { MdMenu, MdDashboard } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import ComputerRepair from "./custom icons/ComputerRepair";
import SheildIcon from "./custom icons/SheildIcon";
import UserRepairIcon from "./custom icons/UserRepairIcon";

// export
export const icons: any = {
  DownArrow: <FaCaretDown />,
  MenuOpen: <MdMenu />,
  MenuClose: <IoMdClose />,
  Dashboard: <MdDashboard />,
  list: <IoMdList />,
  invoice: <FaFileInvoice />,

  facebook: <FaFacebookF />,
  Instagram: <FaInstagram />,
  LinkedinIn: <FaLinkedinIn />,
  Twitter: <FaXTwitter />,
  comoputerRepair: <ComputerRepair />,
  shieldSearch: <SheildIcon />,
  userRepair: <UserRepairIcon />,
  user: <FaRegUser />,
  GearIcon: <FaCog />,
  Question: <FaQuestion />,
  Bell: <FaBell />,
};
