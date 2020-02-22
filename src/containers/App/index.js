import React from 'react';
import GlobalStyle from './global-style';
import Container from '../../components/Container';

const App = () => (
  <>
    <GlobalStyle />
    <Container>
      <h1>Welcome to the Customers Search Form</h1>
      <h2>Please click the start button to begin!</h2>
      <button type="button">Start</button>
    </Container>
  </>
);

export default App;
