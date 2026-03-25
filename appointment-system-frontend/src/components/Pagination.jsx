import React from "react";

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  maxVisible,
  preLabel = "Previous",
  nextLabel = "Next",
  disabled = false,
}) {
  const handlePageChange = (page) => {
    if (page === currentPage || page < 1 || page > totalPages || disabled)
      return;
    onPageChange(page);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
    } else {
      const start = Math.max(currentPage - Math.floor(maxVisible / 2), 1);
      const end = Math.min(
        currentPage + Math.floor(maxVisible / 2),
        totalPages,
      );

      const showStart = start > 2;
      const showEnd = end < totalPages - 1;

      if (!showStart && showEnd) {
        for (let i = 1; i <= maxVisible - 1; i++) pageNumbers.push(i);
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (showStart && !showEnd) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - (maxVisible - 2); i <= totalPages; i++)
          pageNumbers.push(i);
      } else if (showStart && showEnd) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = start; i <= end; i++) pageNumbers.push(i);
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else {
        for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
      }
    }
    return pageNumbers;
  };

  const prevDisabled = currentPage === 1 || disabled;
  const nextDisabled = currentPage === totalPages || disabled;

  return (
    <nav
      className="flex justify-center items-center gap-1 py-6 flex-wrap"
      aria-label="Pagination"
    >
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={prevDisabled}
        aria-label="Previous page"
        className={`
          flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-colors duration-200
          ${
            prevDisabled
              ? "bg-secondary/5 text-secondary/30 cursor-not-allowed"
              : "bg-white border border-secondary/20 text-secondary/70 hover:border-primary hover:text-primary"
          }
        `}
      >
        <span className="hidden sm:inline">{preLabel}</span>
      </button>

      {getPageNumbers().map((page, index) =>
        page === "..." ? (
          <span
            key={`ellipsis-${index}`}
            className="px-2 py-2 text-secondary/40 text-sm select-none"
            aria-hidden="true"
          >
            &hellip;
          </span>
        ) : (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            disabled={disabled}
            aria-label={`Page ${page}`}
            aria-current={page === currentPage ? "page" : undefined}
            className={`
              w-9 h-9 rounded-xl text-sm font-medium transition-colors duration-200
              ${
                page === currentPage
                  ? "bg-primary text-white cursor-default shadow-sm"
                  : "bg-white border border-secondary/20 text-secondary/70 hover:border-primary hover:text-primary"
              }
              ${disabled ? "opacity-50 cursor-not-allowed" : ""}
            `}
          >
            {page}
          </button>
        ),
      )}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={nextDisabled}
        aria-label="Next page"
        className={`
          flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-colors duration-200
          ${
            nextDisabled
              ? "bg-secondary/5 text-secondary/30 cursor-not-allowed"
              : "bg-white border border-secondary/20 text-secondary/70 hover:border-primary hover:text-primary"
          }
        `}
      >
        <span className="hidden sm:inline">{nextLabel}</span>
      </button>
    </nav>
  );
}

export default Pagination;
