import React from 'react'

import styled from 'styled-components';

const NavigationElementCenterContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavigationElementCenterArrow = styled.button`
    width: 3rem;
    height: 8rem;
    border: 2px solid orange;
    background-image: url('src/icons/left-arrow.svg');
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