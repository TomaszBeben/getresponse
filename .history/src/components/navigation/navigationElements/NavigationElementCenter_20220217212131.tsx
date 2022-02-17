import React from 'react'

import styled from 'styled-components';
// import leftArrow from '../../../icons/left-arrow.svg'
// import rightArrow from '../../../icons/right-arrow.svg'

const NavigationElementCenterContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavigationElementCenterArrow = styled.button`
    width: 3rem;
    height: 5rem;
    border: 2px solid orange;
    :hover{
        background-color: orange;
    }
`

const NavigationElementCenter = () => {
  return (
    <NavigationElementCenterContainer>
      <NavigationElementCenterArrow>
        left
      </NavigationElementCenterArrow>
      <div>Week 1</div>
      <NavigationElementCenterArrow>
        right
      </NavigationElementCenterArrow>
    </NavigationElementCenterContainer>
  )
}

export default NavigationElementCenter