import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import Loader from "../Loader";
import { getBooksBySubjectName } from "../../apis";

const top5 = [
  { title: "Hindi" },
  { title: "English" },
  { title: "JavaScript" },
  { title: "Java" },
  { title: "Python" },
  { title: "Maths" },
];

const SubjectList = () => {
  const [loading] = useState(false);
  const [subjectList, setSubjectList] = useState([...top5]);
  const [totalWork, setTotalWork] = useState(0);
  const [search, setSearch] = useState("");
  /* eslint-disable */
  useEffect(() => {
    getSubject();
  }, [search]);
  /*eslint-enable*/

  const getSubject = async () => {
    const res = await getBooksBySubjectName(search, { limit: 5, offset: 0 });
    if (res) {
      setTotalWork(res.work_count);
    }

    if (res && res.works) {
      setSubjectList([...res.works]);
    }
  };

  const onSearchHandler = (val) => setSearch(val);
  return (
    <div>
      <div className="trending-title">Trending Subject</div>
      <Search
        placeholder="Search by Subject Name..."
        callbackApi={onSearchHandler}
      />
      {loading ? (
        <Loader />
      ) : (
        <div>
          {search && <p>Total work sample found: {totalWork}</p>}
          <ul>
            {subjectList &&
              subjectList.length > 0 &&
              subjectList.map((data, key) => {
                return (
                  <Link
                    to={`/subject/${search ? search : data.title}`}
                    key={key}
                  >
                    <li key={key}>{data.title}</li>
                  </Link>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
};
export default SubjectList;
