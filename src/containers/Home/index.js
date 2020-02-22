import React from 'react';
import { Link } from "react-router-dom";
import Container from '../../components/Container';

const Home = () => (
  <Container>
    <h1>Welcome to the Customers Search Form</h1>
    <h2>Please click the start button to begin!</h2>
    <Link to="/form" className="react-router-button">
      <button type="button">Start</button>
    </Link>
  </Container>
);
  
export default Home;
