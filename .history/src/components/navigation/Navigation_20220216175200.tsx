import React from 'react';

import styled from 'styled-components';

const NavigationContainer = styled.div`
  width: 100%;
  height: 20%;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Navigation = () => {
  return (
    <NavigationContainer>
      <div>left</div>
      <div>center</div>
      <div>right</div>
    </NavigationContainer>
  )
}

export default Navigation