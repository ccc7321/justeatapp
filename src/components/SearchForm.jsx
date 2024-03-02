import { useState } from 'react';
import { useGlobalContext } from '../Context';
import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';

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
    <Wrapper>
      <section className="title">
        <h2>Restaurants Near You</h2>
        <div className="title-underline"></div>
      </section>
      <section className="search-form">
        <h3>Input Postcode</h3>
        <div className="title-underline"></div>
        <Form
          className="serach-form row justify-content-center"
          onSubmit={handleSubmit}
        >
          <Form.Control
            className="input col-2"
            type="text"
            name="search"
            placeholder="NW9 4GD"
          />
          <Button type="submit" className="btn col-1" variant="primary">
            Search
          </Button>
        </Form>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  main {
    width: 90vw;
    max-width: 1120px;
    margin: 5rem auto;
    background-color: #241602;
  }
  .input {
    width: 20rem;
  }
  .search-form {
    text-align: center;
  }
  .title-underline {
    background: var(--justeat--01);
    width: 7rem;
    height: 0.25rem;
    margin: 0 auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .search-form .btn {
    margin-left: 1rem;
  }
`;
export default SearchForm;
