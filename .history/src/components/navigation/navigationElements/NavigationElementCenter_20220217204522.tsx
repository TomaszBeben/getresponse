import React from 'react'

import styled from 'styled-components';

const NavigationElementCenterContainer = styled.div`
  width: 40%;
  border: 2px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavigationElementCenterArrow = styled.button`
    width: 20%;
    height: 100%;
    border: 2px solid orange;
`

const NavigationElementCenter = () => {
  return (
    <NavigationElementCenterContainer>
        <NavigationElementCenterArrow>
            elo
        </NavigationElementCenterArrow>
    </NavigationElementCenterContainer>
  )
}

export default NavigationElementCenter