import { useState } from "react";

export default function Pagination({
  itemsPerPage,
  totalItems,
  setCurrentPage,
}) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pageNumbers = Array.from(Array(totalPages).keys());

  const handleClick = (pageNumber) => {
    setCurrentPageIndex(pageNumber);
    setCurrentPage(pageNumber + 1);
  };

  return (
    <div className="pagination flex justify-center">
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handleClick(pageNumber)}
          className={`pagination-btn ${
            currentPageIndex === pageNumber ? "active" : ""
          }`}>
          {pageNumber + 1}
        </button>
      ))}
    </div>
  );
}
