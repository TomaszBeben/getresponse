import React, {FC} from 'react'

import styled from 'styled-components';

import {props} from '../types/props'

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

// type props = {
//   pageBackward: () => void;
//   pageForward: () => void;
//   page: number;
// }

const NavigationElementCenter: FC<props> = ({ pageBackward, pageForward, page }) => {

  return (
    <NavigationElementCenterContainer>
      <NavigationElementCenterArrow onClick={pageBackward}>
        left
      </NavigationElementCenterArrow>
      <h1>{'week ' + page}</h1>
      <NavigationElementCenterArrow onClick={pageForward}>
        right
      </NavigationElementCenterArrow>
    </NavigationElementCenterContainer>
  )
}

export default NavigationElementCenter