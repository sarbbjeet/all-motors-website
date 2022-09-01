import React, { useState } from "react";
import { f2 as ff } from "../styles/variables.module.scss";

export default function Pagination({
  data,
  RenderComponent,
  pageLimit = 3,
  dataLimit = 6,
}) {
  const pages = Math.floor(data?.length / dataLimit);
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  };
  const goToPrevPage = () => {
    setCurrentPage((page) => page - 1);
  };
  const changePage = (e) => {
    const pageNumber = Number(e.target.textContent);
    setCurrentPage(pageNumber);
  };

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data?.slice(startIndex, endIndex);
  };
  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div className="w-100">
      <div className="w-100 row p-0 m-0" style={{ minHeight: "500px" }}>
        {getPaginatedData()?.map((d, idx) => (
          <RenderComponent key={idx} data={d} />
        ))}
      </div>
      <div className="pagination justify-content-center my-4">
        <nav aria-label="Page pg navigation example">
          <div className="pagination justify-content-center">
            <div
              className={`page-item item ${currentPage <= 1 ? "disabled" : ""}`}
              onClick={goToPrevPage}
            >
              <a
                className="page-link"
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                Previous
              </a>
            </div>
            {getPaginationGroup().map((item, i) => (
              <div
                key={i}
                className={`page-item ${item == currentPage && "active"} ${
                  item > pages + 1 && "disabled"
                }`}
                onClick={changePage}
              >
                <a className="page-link" href="#">
                  {item}
                </a>
              </div>
            ))}
            <div
              onClick={goToNextPage}
              className={`page-item ${currentPage >= pages ? "disabled" : ""}`}
            >
              <a className="page-link" href="#">
                Next
              </a>
            </div>
          </div>
        </nav>
      </div>

      <style jsx>
        {`
          .pg {
            box-shadow: 2px 2px 5px rgba(255, 0, 0, 0.9) !important;
          }
          .disabled {
            pointer-events: none;
            box-shadow: none;
            color: #999;
          }
          .page-item a {
            font-family: ${ff};
            font-size: 18px !important;
            font-weight: 900;

            // background-color: rgba(0, 0, 200, 0.9);
            // color: white;
          }
          .disabled a {
            font-size: 18px !important;
            font-weight: 600;
            // background-color: rgba(0, 0, 200, 0.5);
            // color: white;
          }
        `}
      </style>
    </div>
  );
}
