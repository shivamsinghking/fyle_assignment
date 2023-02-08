import React, { useEffect, useState } from "react";
import "./index.css";
import Loader from "../Loader";
import Pagination from "../Pagination";
import Search from "../Search";
import SubjectList from "./subject-list";
import Table from "../common/table";
import { getBooks } from "../../apis";
import { formatBookData } from "../../helperFn";
import { booksActiveFields, booksPerPage } from "../../constants";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [pageNumber, setPageNumber] = useState(null);
  const [booksList, setBooksList] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  /*eslint-disable*/
  useEffect(() => {
    if (pageNumber === null || pageCount === 0) return;
    getBooksHandler(false);
  }, [pageNumber]);

  useEffect(() => {
    if (searchValue.length === 0 || !searchValue) return;
    setPageNumber(0);
    setPageCount(0);
    getBooksHandler(true);
  }, [searchValue]);
  /*eslint-enable*/

  const getBooksHandler = async () => {
    let offset = pageNumber * booksPerPage;
    setLoading(true);
    const res = await getBooks({ q: searchValue, limit: booksPerPage, offset });
    if (res && res.docs) {
      let formatedData = formatBookData(res.docs);
      setBooksList([...formatedData]);
    }

    if (res && res.numFound) {
      let count = Math.ceil(res.numFound / booksPerPage);
      setPageCount(count);
    }

    setLoading(false);
  };

  const onChangePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const onChangeSearch = (val) => {
    setSearchValue(val.trim());
  };

  console.log(pageCount, pageNumber);
  return (
    <div className="home-container">
      <div className="subject-sub-container">
        <SubjectList />
      </div>
      <div className="book-list-container">
        <Search
          placeholder="Search by Books and Author Name..."
          callbackApi={onChangeSearch}
        />
        {loading ? (
          <Loader msg="Searching your Books..." />
        ) : (
          <>
            <Table
              data={booksList}
              activeFields={booksActiveFields}
              customClassName="books-table"
            />
          </>
        )}
        <Pagination
          pageCount={pageCount}
          changePage={onChangePage}
          pageNumber={pageNumber}
        />
        {!loading && searchValue && booksList.length === 0 && (
          <p>Sorry, No Data Found</p>
        )}
      </div>
    </div>
  );
};
export default Home;
