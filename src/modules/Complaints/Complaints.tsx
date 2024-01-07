"use client";
import SearchInputBox from "@components/SearchInput";
import SelectStatus from "@components/Select Status";
import SortBy from "@components/SortBy";
import TableHead from "@components/TableHead";
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
      <div className="">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                  <TableHead />
                  <tbody>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        1
                      </td>
                      <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Mark
                      </td>
                      <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Otto
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                    </tr>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        2
                      </td>
                      <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Jacob
                      </td>
                      <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Thornton
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">@fat</td>
                    </tr>
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                        3
                      </td>
                      <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        Larry the Bird
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
