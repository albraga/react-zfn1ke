import React from 'react';
import { Container, Nav, Col } from 'react-bootstrap';

const Footer = ({ length }) => {
  return (
    <div className="fixed-bottom justify-content-center">

        <div class="bg-primary text-white">{length}</div>

    </div>
  );
};

export default Footer;
//<Container className="fixed-bottom">{length}</Container>
