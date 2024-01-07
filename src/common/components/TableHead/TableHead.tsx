import { TableHeadData } from "@config/constants";

const TableHead = () => {
  return (
    <thead className="border-b font-medium dark:border-neutral-500">
      <tr>
        {TableHeadData.map((headData, i) => (
          <th
            key={i}
            scope="col"
            className="border-r px-6 py-4 dark:border-neutral-500"
          >
            {headData}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
