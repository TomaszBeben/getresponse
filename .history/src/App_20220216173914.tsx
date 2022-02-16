import React from 'react';

import styled from 'styled-components'

import Main from './components/main/Main';

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const App = () => {

  return (
    <AppContainer>
      <Main/>
    </AppContainer>
  );
}

export default App;
