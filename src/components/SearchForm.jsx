import { useState } from 'react';

function SearchForm() {
  const handleFormChange = (e) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements);
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    console.log(searchValue);
  };
  return (
    <section>
      <h2>Input Postcode</h2>
      <form className="serach-form" onSubmit={handleSubmit}>
        <input type="text" name="search" placeholder="NW9 4GD" />

        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
}
export default SearchForm;
