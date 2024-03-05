import { Button } from 'react-bootstrap';

function RestaurantsPerPage({ setRestaurantsPerPage }) {
  return (
    <div className="setRestaurantsPerPage">
      <h4>No. of restaurants per page</h4>
      <Button
        onClick={() => {
          setRestaurantsPerPage(6);
        }}
      >
        6 restaurants
      </Button>

      <Button
        onClick={() => {
          setRestaurantsPerPage(3);
        }}
      >
        3 Restaurants
      </Button>
    </div>
  );
}
export default RestaurantsPerPage;
