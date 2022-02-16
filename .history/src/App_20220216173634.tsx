import React from 'react';

import styled from 'styled-components'

import Main from './components/main/Main';

const AppContainer = styled.div `
  margin-top: 1rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center
`

const App = () => {

  return (
    <AppContainer>
      <Main/>
    </AppContainer>
  );
}

export default App;
