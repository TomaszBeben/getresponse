import React from 'react'

import styled from 'styled-components';

const NavigationElementCenterContainer = styled.div`
  width: 30%;
  height: 100%;
  border: 2px solid red;
`

const NavigationElementCenter = () => {
  return (
    <NavigationElementCenterContainer>NavigationElementCenter</NavigationElementCenterContainer>
  )
}

export default NavigationElementCenter