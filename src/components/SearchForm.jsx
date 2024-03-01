import { useState } from 'react';

function SearchForm() {
  const handleFormChange = (e) => {
    console.log(e.target.value);
  };

  const handleButtonClick = () => {
    console.log(postCode);
  };
  return (
    <section>
      <form>
        <h2>Input Postcode</h2>
        <input
          type="text"
          name="searchForm"
          onChange={handleFormChange}
        ></input>
      </form>
      <button className="btn" onClick={handleButtonClick}>
        Search
      </button>
    </section>
  );
}
export default SearchForm;
