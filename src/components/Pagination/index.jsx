import React from "react";
import ReactPaginate from 'react-paginate'
import './index.css'

const Pagination = ({pageCount, changePage, pageNumber}) => {
  if(pageNumber === null || !pageCount) return ;
  return <div>
    <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
  </div>
}

export default Pagination