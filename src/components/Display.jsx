import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useGlobalContext } from '../Context';
import Review from './Review';
import Pagination from './Pagination';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';
import Sort from './Sort';

const url =
  'https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode';

function Display() {
  const { searchTerm } = useGlobalContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [restaurantsPerPage] = useState(3);
  const [sortedRestaurants, setSortedRestaurants] = useState([]);
  const [defaultArray, setDefaultArray] = useState({});

  // Get current restaurants
  const indexOfLastRestaurant = currentPage * restaurantsPerPage;
  const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantsPerPage;

  // Fetch from just eat api
  const response = useQuery({
    queryKey: ['restaurants', searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}/${searchTerm}`);
      setSortedRestaurants(result.data.restaurants.slice(0, 10));
      return result.data;
    },
  });

  // Run effect when default Array Changes
  useEffect(() => {
    if (defaultArray.length > 0) {
      setSortedRestaurants(defaultArray);
    }
  }, [defaultArray]);

  if (response.isLoading) {
    return <div className="loading"></div>;
  }
  if (response.isError) {
    return (
      <section className="container">
        <h4>There was an error</h4>
      </section>
    );
  }
  if (response.data === undefined) {
    return (
      <section className="container">
        <h4>There was an error</h4>
      </section>
    );
  }

  // setCurrentPage changes the results each time
  const results = sortedRestaurants.slice(
    indexOfFirstRestaurant,
    indexOfLastRestaurant
  );

  console.log(results);
  if (results.length < 1) {
    return (
      <section className="container">
        <h4>No results found</h4>
      </section>
    );
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSort = (sortedArray) => {
    setSortedRestaurants(sortedArray);
    setCurrentPage(1);
  };

  return (
    <Wrapper className="restaurants">
      <Sort
        restaurants={sortedRestaurants}
        setCurrentPage={setCurrentPage}
        onSort={handleSort}
      />
      <section className="row justify-content-center">
        {results.map((restaurant) => {
          const { id, name, address, rating, cuisines } = restaurant;
          return (
            <Col key={id} className="single-restaurant" xs={12} md={6} lg={3}>
              <section className="restaurants-rating">
                <Review stars={rating.starRating} reviews={rating.count} />
              </section>
              <div className="restaurant-info">
                <h3>{name}</h3>
                <h3>
                  Address:
                  {address.city},{address.firstLine},{address.postalCode}
                </h3>

                <h3>Type of Cuisine:</h3>
                {cuisines.map((cusine) => {
                  return <h4>{cusine.name}</h4>;
                })}
              </div>
            </Col>
          );
        })}
      </section>
      <Pagination
        restaurantsPerPage={restaurantsPerPage}
        totalRestaurants={10}
        paginate={paginate}
        currentPage={currentPage}
      />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  main {
    background-color: rgb(238, 237, 234);
  }
`;
export default Display;
