import { useState } from 'react';
import { Button, Form, InputGroup, Placeholder } from 'react-bootstrap';
import styled from 'styled-components';

function Sort({ restaurants, onSort }) {
  const [sortCriterion, setSortCriterion] = useState('rating');

  const handleSortChange = (e) => {
    setSortCriterion(e.target.value);
  };

  const sortRestaurants = () => {
    const sorted = [...restaurants].sort((a, b) => {
      if (sortCriterion === 'rating') {
        return b.rating.starRating - a.rating.starRating; // Sort by rating
      }
    });
    return sorted;
  };

  const handleSortClick = () => {
    const sortedRestaurants = sortRestaurants();
    onSort(sortedRestaurants);
  };

  return (
    <Wrapper>
      <Form.Select
        value={sortCriterion}
        onChange={handleSortChange}
        className="sortForm"
      >
        <option value="rating">Sort by Rating</option>
        <option value="cuisine">Sort by cuisine</option>
        {/* Add additional sorting options here */}
      </Form.Select>
      <Button onClick={handleSortClick}>Sort</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
export default Sort;
