import React from 'react';

import styled from 'styled-components'

import Main from './components/main/Main';

import { ReactComponent as LeftArrow } from './images/leftArrow.svg';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const App = () => {

  return (
    <AppContainer>
      <LeftArrow/>
      <Main/>
    </AppContainer>
  );
}

export default App;
