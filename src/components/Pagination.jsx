function Pagination({ restaurantsPerPage, totalRestaurants, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRestaurants / restaurantsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
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
      <h4>testing</h4>
    </nav>
  );
}
export default Pagination;
