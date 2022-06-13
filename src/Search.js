import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Search = ({search, setSearch}) => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>{search}</Form.Label>
          <Form.Control type="text" value={search} role="searchbox" placeholder="..." onChange={e => setSearch(e.target.value)} />
        </Form.Group>
      </Form>
    </>
  );
};

export default Search;
