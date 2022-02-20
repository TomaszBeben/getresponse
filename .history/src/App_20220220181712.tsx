import React from 'react';

import styled from 'styled-components'

import Main from './components/main/Main';
import { Global } from './styles/globalStyles';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  
`;

const App = () => {

  return (
    <>
    <Global />
    <AppContainer>
      <Main/>
    </AppContainer>
    </>
    
  );
}

export default App;
