import { useState } from 'react';

function Sort({ restaurants, onSort }) {
  const [sortCriterion, setSortCriterion] = useState('rating');

  const handleSortChange = (e) => {
    setSortCriterion(e.target.value);
  };

  const sortRestaurants = () => {
    const sorted = [...restaurants].sort((a, b) => {
      if (sortCriterion === 'rating') {
        return b.rating.starRating - a.rating.starRating; // Sort by rating
      } else {
        // Add additional sorting criteria here
        // For example, sorting by name:
        // return a.name.localeCompare(b.name);
      }
    });
    return sorted;
  };

  const handleSortClick = () => {
    const sortedRestaurants = sortRestaurants();
    onSort(sortedRestaurants);
  };

  return (
    <div>
      <select value={sortCriterion} onChange={handleSortChange}>
        <option value="rating">Sort by Rating</option>
        {/* Add additional sorting options here */}
      </select>
      <button onClick={handleSortClick}>Sort</button>
    </div>
  );
}
export default Sort;
