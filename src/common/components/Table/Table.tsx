import React, { FC } from "react";
import TableHead from "./partials/TableHead";

type TableBodyProps = {
  HeadData: string[];
  TableBodyItems: any;
};
const Table: FC<TableBodyProps> = ({ HeadData, TableBodyItems }) => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-hidden">
          <div className="inline-block min-w-full py-2 ">
            <div className="overflow-hidden">
              <table className="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                <TableHead HeadData={HeadData} />

                <tbody>
                  {TableBodyItems &&
                    TableBodyItems.map((items: any, i: number) => (
                      <tr key={i} className="border-b dark:border-neutral-500">
                        <td className=" border-r px-6 py-4 font-medium dark:border-neutral-500">
                          {i + 1}
                        </td>
                        <td className=" border-r px-2 py-2 dark:border-neutral-500">
                          {items?.repair?.order_number}
                        </td>
                        <td className=" border-r px-2 py-2 dark:border-neutral-500">
                          {items?.model_number}
                        </td>
                        <td className=" border-r px-2 py-2 dark:border-neutral-500">
                          {items?.serial_number}
                        </td>
                        <td className=" border-r px-2 py-2 dark:border-neutral-500">
                          {items?.received_date}
                        </td>
                        <td className=" border-r px-2 py-2 dark:border-neutral-500">
                          {items?.customer?.company}
                        </td>
                        <td className=" border-r px-2 py-2 dark:border-neutral-500">
                          {items?.versions[0]?.problems.toString()}
                        </td>
                        <td className=" border-r px-2 py-2 dark:border-neutral-500">
                          {items?.repair_status}
                        </td>
                        <td className=" border-r px-2 py-2 dark:border-neutral-500">
                          {items?.timeAgo}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
