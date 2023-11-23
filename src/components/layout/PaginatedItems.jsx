import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 11, 12, 13, 14,
  7, 8, 9, 10, 11, 12, 13, 14,1
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div className="">
            <h1>{item}</h1>
          </div>
        ))}
    </>
  );
}

const PaginatedItems = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(10);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="">
        <Items currentItems={currentItems} />
      </div>
      <ReactPaginate
        breakLabel="..."
        breakClassName=""
        breakLinkClassName=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        pageClassName=" "
        previousClassName="absolute right-[100px] top-[100px]"
        nextClassName=""
        containerClassName=" "
        activeClassName=" "
        renderOnZeroPageCount={null}
      />
      {/* <p >
        Products from {itemOffset} to {endOffset} of {items.length}
      </p> */}
    </>
  );
};

export default PaginatedItems;