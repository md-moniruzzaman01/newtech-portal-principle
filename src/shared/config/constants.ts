import classNames from "classnames";
import { atom } from "jotai";

// whenever wee need to change default className value we will use this
export const cx = classNames;

export const UserAtom = atom({
  _id: "",
  user_name: "",
  full_name: "",
  asp: "",
  team: "",
  contact_number: "",
  image: "",
  isActive: false,
  email: "",
  branch: "",
  Skill: [],
  Role: "",
});

// brand image
export const logo = "/NT-LOGO.png";
export const StatusList = [
  "Received",
  "QC",
  "Engineer Is working",
  "Repair Difficulty",
  "Leak material",
  "Buffer",
  "Repaired",
  "Cancel",
  "Reject",
  "CN",
  "NTF",
  "Repair Paused",
  "Repair resumed",
  "Not Repairable",
  "QA",
  "Completed",
];

export const sortBy = [
  { title: "Newest", value: "-received_date" },
  { title: "Oldest", value: "received_date" },
];

export const TableHeadData = [
  "SL",
  "Complaint No.",
  "Model No.",
  "Serial No.",
  "RD",
  "Customer Name",
  "Problem",
  "Status",
  "TAT",
  "Action",
];
