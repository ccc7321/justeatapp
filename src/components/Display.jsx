import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useGlobalContext } from '../Context';
import Review from './Review';
import Pagination from './Pagination';
import styled from 'styled-components';

const url =
  'https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode';

function Display() {
  const { searchTerm } = useGlobalContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [restaurantsPerPage] = useState(3);

  // Get current restaurants
  const indexOfLastRestaurant = currentPage * restaurantsPerPage;
  const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantsPerPage;

  const response = useQuery({
    queryKey: ['restaurants', searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}/${searchTerm}`);

      return result.data;
    },
  });
  console.log(response);

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

  const fiftyResults = response.data.restaurants.slice(0, 12);
  const results = fiftyResults.slice(
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

  return (
    <Wrapper className="restaurants">
      <section className="row justify-content-center">
        {results.map((restaurant) => {
          const { id, name, address, rating, cuisines } = restaurant;
          return (
            <section key={id} className="single-restaurant col-3">
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
            </section>
          );
        })}
      </section>
      <Pagination
        restaurantsPerPage={restaurantsPerPage}
        totalRestaurants={12}
        paginate={paginate}
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
