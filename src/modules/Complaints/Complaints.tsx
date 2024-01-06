"use client";
import SearchInputBox from "@components/SearchInput";
import SelectStatus from "@components/Select Status";
import SortBy from "@components/SortBy";
import { useState } from "react";

export default function Complaints() {
  const [searchValue, setSearchValue] = useState("");
  const [selectStatus, setSelectStatus] = useState("");
  const [sortBy, setSortBy] = useState("");
  return (
    <>
      <div className="flex justify-between">
        <SearchInputBox
          SetState={setSearchValue}
          placeholder="Type to search"
        />
        <div className=" space-x-5 flex">
          <SelectStatus SetState={setSelectStatus} />
          <SortBy SetState={setSortBy} />
        </div>
      </div>
      <div className="min-h-screen flex justify-center items-center">
        <h2>Complaint page</h2>
      </div>
    </>
  );
}
