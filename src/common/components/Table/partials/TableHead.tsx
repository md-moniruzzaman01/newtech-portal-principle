const TableHead = ({ HeadData }: { HeadData: string[] }) => {
  return (
    <thead className="border-b font-medium dark:border-neutral-500">
      <tr>
        {HeadData.map((Data, i) => (
          <th
            key={i}
            scope="col"
            className="border-r px-6 py-4 dark:border-neutral-500"
          >
            {Data}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
