import React, {FC} from 'react'

import { NavigationElementCenterContainer, NavigationElementCenterArrow } from '../styles/styles'
import {props} from '../types/props'

// const NavigationElementCenterContainer = styled.div`
//   width: 40%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `

// const NavigationElementCenterArrow = styled.button`
//     width: 3rem;
//     height: 5rem;
//     border: 2px solid orange;
//     :hover{
//         background-color: orange;
//     }
// `

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