import { sortBy } from "@config/constants";
import { PassSetStatusProps } from "@config/types";

const SortBy = ({ SetState }: PassSetStatusProps) => {
  return (
    <div className=" flex items-center space-x-2 font-[500] font-primary">
      <h2>Show List</h2>
      <select
        name="sortBy"
        onChange={(event) => SetState(event.target.value)}
        className=" py-1"
        id=""
      >
        {sortBy.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortBy;
