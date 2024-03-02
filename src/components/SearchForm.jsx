import { useState } from 'react';
import { useGlobalContext } from '../Context';

function SearchForm() {
  const { setSearchTerm } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements);
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
  };
  return (
    <main>
      <section className="title">
        <h2>Restaurants Near You</h2>
        <div className="title-underline"></div>
      </section>
      <h2>Input Postcode</h2>
      <form className="serach-form" onSubmit={handleSubmit}>
        <input type="text" name="search" placeholder="NW9 4GD" />

        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </main>
  );
}
export default SearchForm;
