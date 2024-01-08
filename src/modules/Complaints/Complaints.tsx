"use client";
import Pagination from "@components/Pagination/Pagination";
import SearchInputBox from "@components/SearchInput";
import SelectStatus from "@components/Select Status";
import SortBy from "@components/SortBy";
import Table from "@components/Table";
import { TableHeadData, UserAtom } from "@config/constants";
import axios from "axios";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

export default function Complaints() {
  const [searchValue, setSearchValue] = useState("");
  const [selectStatus, setSelectStatus] = useState("");
  const [sortBy, setSortBy] = useState("-received_date");
  const [complaints, setComplaints] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [TotalPage, setTotalPage] = useState(0);
  const [User] = useAtom(UserAtom);

  useEffect(() => {
    const queryParams = [];
    queryParams.push(`page=${currentPage}`);
    queryParams.push(`limit=${100}`);
    queryParams.push(`sort=${sortBy}`);
    if (selectStatus) {
      queryParams.push(`repair_status=${selectStatus}`);
    }
    if (searchValue) {
      queryParams.push(`search=${searchValue}`);
    }

    const url = `${process.env.API_URL}/api/product/principle/${
      User.asp
    }?${queryParams.join("&")}`;

    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((data) => {
        if (data.status === 200) {
          console.log("data", data);
          setComplaints(data.data.result);
          const totalPages: number = data.data.count / 100;
          setTotalPage(totalPages);
        } else {
          alert(data.data.msg);
        }
      });
  }, [currentPage, selectStatus, sortBy, searchValue]);
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
      <div className="">
        <Table HeadData={TableHeadData} TableBodyItems={complaints} />
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={TotalPage}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </>
  );
}
