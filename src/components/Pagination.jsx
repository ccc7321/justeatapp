import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styled from 'styled-components';

function Pagination({
  restaurantsPerPage,
  totalRestaurants,
  paginate,
  setCurrentPage,
  currentPage,
}) {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalRestaurants / restaurantsPerPage);

  // return the smallest integer greater than total no. of restauratns divided by the number pf restaurants per page
  // 10 resto, 3 per page -> 3.1 => return 4, pageNumbers = [1,2,3,4]
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <Wrappers>
      <nav>
        <ul className="pagination">
          {/* Previous Page Button */}
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => {
                if (currentPage > 1) {
                  paginate(currentPage - 1);
                }
              }}
              disabled={currentPage === 1}
            >
              <FaChevronLeft />
            </button>
          </li>

          {/* Set up page numbers */}
          {pageNumbers.map((number) => {
            return (
              <li
                key={number}
                className={`page-item ${
                  currentPage === number ? 'active' : ''
                }`}
              >
                <a
                  className="page-link"
                  onClick={() => {
                    paginate(number);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  {number}
                </a>
              </li>
            );
          })}
          {/* Next Page Button */}
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => {
                if (currentPage < totalPages) {
                  paginate(currentPage + 1);
                }
              }}
              disabled={currentPage === totalPages}
            >
              <FaChevronRight />
            </button>
          </li>
        </ul>
      </nav>
    </Wrappers>
  );
}

const Wrappers = styled.nav`
  .pagination {
    justify-content: center;
  }
  .active .page-link {
    background-color: var(--justeat--01);
    color: #fff;
    border-radius: 5px;
  }

  .active .page-link:hover {
    background-color: #0056b3;
  }
`;
export default Pagination;
