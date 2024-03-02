import styled from 'styled-components';

function Pagination({ restaurantsPerPage, totalRestaurants, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRestaurants / restaurantsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Wrappers>
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => {
            return (
              <li key={number} className="page-item">
                <a
                  href="!#"
                  className="page-link"
                  onClick={() => {
                    paginate(number);
                  }}
                >
                  {number}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </Wrappers>
  );
}

const Wrappers = styled.nav`
  .pagination {
    justify-content: center;
  }
`;
export default Pagination;
