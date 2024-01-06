import { StatusList } from "@config/constants";
import { PassSetStatusProps } from "@config/types";

const SelectStatus = ({ SetState }: PassSetStatusProps) => {
  return (
    <div className=" flex items-center space-x-2 font-[500] font-primary">
      <h2>Status</h2>
      <select
        name="select_status"
        onChange={(event) => SetState(event.target.value)}
        className="w-[4rem] py-1"
        id=""
      >
        <option value="">Any</option>
        {StatusList.map((staus, i) => (
          <option key={i} value={staus}>
            {staus}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectStatus;
