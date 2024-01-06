import { cx } from "@config/constants";
import { SearchInputBoxProps } from "@config/types";
import { FC } from "react";

const SearchInputBox: FC<SearchInputBoxProps> = ({
  className = "",
  disabled = false,
  loading,
  SetState,
  placeholder,
}) => {
  const CLASSES = ` transition-all  duration-300 px-4 py-2 rounded-tr-md rounded-br-md bg-primary font-[600] font-primary  ${
    disabled && "!bg-disable hover:!bg-disable cursor-not-allowed"
  } ${
    loading && "cursor-not-allowed !bg-disable hover:!bg-disable"
  }  ${className} `;

  const handleSearchSubmit = (event: any) => {
    event.preventDefault();
    const searchValue = event.target.search_box.value;
    SetState(searchValue);
  };

  return (
    <form
      onSubmit={handleSearchSubmit}
      className="flex  items-center text-background"
    >
      <input
        type="text"
        name="search_box"
        placeholder={placeholder}
        className={cx(
          "py-2 px-4 w-full max-w-[400px]  font-primary",
          className
        )}
      />
      <input type="submit" className={CLASSES} value="Search" />
    </form>
  );
};

export default SearchInputBox;
