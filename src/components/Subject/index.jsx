import React, { useState, useEffect } from "react";
import "./index.css";
import { Link, useParams } from "react-router-dom";
import Table from "../common/table";
import Pagination from "../Pagination";
import { getBooksBySubjectName } from "../../apis";
import { formatSubjectData } from "../../helperFn";
import { subjectActiveFields, limitPerPage } from "../../constants";

const Subject = () => {
  const [booksList, setBooksList] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  let { subject_id } = useParams();
  /* eslint-disable */
  useEffect(() => {
    getBooks();
  }, []);

  useEffect(() => {
    getBooks();
  }, [pageNumber]);
  /* eslint-enable */

  const getBooks = () => {
    let offset = pageNumber * limitPerPage;
    getBooksBySubjectName(subject_id, { limit: 10, offset })
      .then((data) => {
        setPageCount(Math.ceil(data.work_count / limitPerPage));
        setBooksList(formatSubjectData(data.works));
      })
      .catch((err) => console.log("error subject ", err));
  };
  const onChangePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="subject-container">
      <Link to="/">Back to Home</Link>
      <div className="trending-title">
        Top Books in {subject_id.toLocaleUpperCase()}{" "}
      </div>
      <Table
        data={booksList}
        activeFields={subjectActiveFields}
        customClassName="subject-table"
      />
      <Pagination
        pageCount={pageCount}
        changePage={onChangePage}
        forcePage={pageNumber}
      />
    </div>
  );
};

export default Subject;
