import React from 'react';
import { Container, Nav, Col } from 'react-bootstrap';

const Footer = ({ length }) => {
  return (
    <div className="container fixed-bottom">
      <div className="row">
        <div className="col bg-primary text-white text-center">
          {length}
        </div>
      </div>
    </div>
  );
};

export default Footer;
//<Container className="fixed-bottom">{length}</Container>
