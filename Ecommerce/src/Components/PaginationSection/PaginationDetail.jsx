import {useState } from "react";
import { Pagination } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PaginationDetail = ({ lastpage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();
  const location = useLocation();

  const handlePageItem = (pageId) => {
    const queryParams = new URLSearchParams(location.search);
    const pageParams = queryParams.get("page");
    const page = pageId
      ? parseInt(pageId)
      : pageParams
      ? parseInt(pageParams)
      : 1;
      setCurrentPage(page);
    navigate(`?page=${page}`);
  };

  const handlePrev = () => {
    const prevPage = currentPage - 1;
    setCurrentPage(prevPage);
    navigate(`?page=${prevPage}`);
  };

  const handleNext = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    navigate(`?page=${nextPage}`);
  };

  let pageItems = [];
  for (let page = 1; page <= lastpage; page++) {
    pageItems.push(
      <Pagination.Item
        key={page}
        active={page === currentPage}
        onClick={() => handlePageItem(page)}
      >
        {page}
      </Pagination.Item>
    );
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-center mt-5">
        <Pagination>
          <Pagination.Prev disabled={currentPage == 1} onClick={handlePrev}>
            &laquo; Previous
          </Pagination.Prev>
          {pageItems}
          <Pagination.Next
            disabled={currentPage === lastpage}
            onClick={handleNext}
          >
            Next &raquo;
          </Pagination.Next>
        </Pagination>
      </div>
    </>
  );
};
PaginationDetail.propTypes ={
  lastpage: PropTypes.number, 
}
export default PaginationDetail;
