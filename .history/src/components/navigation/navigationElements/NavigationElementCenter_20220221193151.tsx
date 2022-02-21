import React, {FC} from 'react'

import { NavigationElementCenterContainer, NavigationElementCenterArrow } from '../styles'
import {props} from '../types/props'

import left_arrow from '../../../images/leftArrow.svg'

const NavigationElementCenter: FC<props> = ({ pageBackward, pageForward, page }) => {

  return (
    <NavigationElementCenterContainer>
      <NavigationElementCenterArrow onClick={pageBackward}>
        <img src={left_arrow} alt="left arrow" />
      </NavigationElementCenterArrow>
      <h1>{'Week ' + page}</h1>
      <NavigationElementCenterArrow onClick={pageForward}>
        right
      </NavigationElementCenterArrow>
    </NavigationElementCenterContainer>
  )
}

export default NavigationElementCenter