import React from 'react';
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from "react-router-dom";
import styled from 'styled-components';

import Routes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';

import client from './graphql';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Wrapper>
          <Routes/>
        </Wrapper>
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default App;

const Wrapper = styled.div `
  min-height: 100vh;
  background-color: #fffdfdb0;
`
