import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Search = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Search</Form.Label>
          <Form.Control type="text" placeholder="..." />
        </Form.Group>
      </Form>
    </>
  );
};

export default Search;
