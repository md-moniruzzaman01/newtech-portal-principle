// components/Pagination.js
import React, { FC } from "react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: any;
};
const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const displayPages = () => {
    const visiblePages = [];
    const startPage = Math.max(1, currentPage - 3);
    const endPage = Math.min(totalPages, currentPage + 3);

    for (let i = startPage; i <= endPage; i++) {
      visiblePages.push(i);
    }

    return visiblePages;
  };

  return (
    <div>
      <span>Pages: </span>
      {displayPages().map((page) => (
        <span
          key={page}
          className="px-1.5 mx-1 border"
          style={{
            cursor: "pointer",
            backgroundColor: currentPage === page ? "#0DADE0" : "#F7F8FA",
          }}
          onClick={() => onPageChange(page)}
        >
          {page}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
