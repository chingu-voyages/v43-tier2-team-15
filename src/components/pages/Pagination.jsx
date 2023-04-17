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
    <div className="pagination flex flex-nowrap justify-center items-center space-x-1">
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handleClick(pageNumber)}
          className={`pagination-btn 
              ${currentPageIndex === pageNumber ? "active" : ""}
              px-4 py-2 rounded-md 
              bg-bonfire hover:bg-orange-700 
              text-white font-medium 
              focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-opacity-50 
              sm:text-sm sm:px-3 md:text-base md:px-4`}>
          {pageNumber + 1}
        </button>
      ))}
    </div>
  );
}
