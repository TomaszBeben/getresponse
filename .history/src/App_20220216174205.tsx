import React from 'react';

import styled from 'styled-components'

import Main from './components/main/Main';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const App = () => {

  return (
    <AppContainer>
      <Main/>
    </AppContainer>
  );
}

export default App;
