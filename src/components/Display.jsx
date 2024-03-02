import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';
import { useGlobalContext } from '../Context';

const url =
  'https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode';

function Display() {
  const { searchTerm } = useGlobalContext();

  const response = useQuery({
    queryKey: ['restaurants', searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}/${searchTerm}`);

      return result.data;
    },
  });
  console.log(response);

  // const fetchRestaurants = async () => {
  //   try {
  //     const response = await fetch(url);
  //     const restaurants = await response.json();
  //     console.log(restaurants.restaurants.splice(0, 10));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchRestaurants();
  // }, []);
  // if(r)
  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading ...</h4>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section className="image-container">
        <h4>There was an error</h4>
      </section>
    );
  }

  const results = response.data.restaurants.splice(0, 10);
  console.log(results);
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found</h4>
      </section>
    );
  }
  return (
    <section className="image-container">
      {results.map((restaurant) => {
        const { id, name, address, rating, cuisines } = restaurant;
        return (
          <section key={id}>
            <h3>{name}</h3>
            <h3>
              Address:
              {address.city},{address.firstLine},{address.postalCode}
            </h3>
            <h3>{rating.count} votes</h3>
            <h3> {rating.starRating}</h3>
            <h2>Type of Cuisine:</h2>
            {cuisines.map((cusine) => {
              return <h3>{cusine.name}</h3>;
            })}
          </section>
        );
      })}
    </section>
  );
}
export default Display;
