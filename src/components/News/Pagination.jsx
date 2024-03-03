"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";

const Pagination = ({ paginationData }) => {
  const t = useTranslations("default");
  const [pageIndex, setPageIndex] = useState(paginationData.page);
  const totalPages = paginationData.pageCount;

  console.log(paginationData);
  return (
    <div className="pagination-and-next-prev">
      <div className="pagination">
        <ul>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((count) => (
            <li className={pageIndex === count ? "active" : ""}>
              <a href={`?page=${count}`}>{count}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="next-prev-btn">
        <ul>
          {pageIndex === 1 ? (
            ""
          ) : (
            <li>
              <a
                href={`?page=${pageIndex - 1}`}
                disabled={pageIndex === 1}
                onClick={() => setPageIndex(pageIndex - 1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={7}
                  height={14}
                  viewBox="0 0 7 14"
                >
                  <path d="M0 7.00008L7 0L2.54545 7.00008L7 14L0 7.00008Z" />
                </svg>{" "}
                {t("Pagination.prev")}
              </a>
            </li>
          )}
          {pageIndex === paginationData.pageCount ? (
            ""
          ) : (
            <li>
              <a
                href={`?page=${pageIndex}`}
                disabled={pageIndex === paginationData.pageCount}
                onClick={() => setPageIndex(pageIndex + 1)}
              >
                {t("Pagination.next")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={7}
                  height={14}
                  viewBox="0 0 7 14"
                >
                  <path d="M7 7.00008L0 0L4.45455 7.00008L0 14L7 7.00008Z" />
                </svg>
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
