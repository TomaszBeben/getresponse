import React from 'react';

import styled from 'styled-components'

import Main from './components/main/Main';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  background-color: #F8F8FF;
`;

const App = () => {

  return (
    <AppContainer>
      <Main/>
    </AppContainer>
  );
}

export default App;
