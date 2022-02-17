import React from 'react';

import styled from 'styled-components';
import NavigationElementCenter from './navigationElements/NavigationElementCenter';

const NavigationContainer = styled.div`
  width: 100%;
  height: 20%;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`

const Navigation = () => {
  return (
    <NavigationContainer>
      <div>left</div>
      <NavigationElementCenter/>
      <div>right</div>
    </NavigationContainer>
  )
}

export default Navigation