import React, {FC} from 'react'

import { NavigationElementCenterContainer, NavigationElementCenterArrow } from '../styles'
import {props} from '../types/props'

import left_arrow from '../../../images/leftArrow'

const NavigationElementCenter: FC<props> = ({ pageBackward, pageForward, page }) => {

  return (
    <NavigationElementCenterContainer>
      <NavigationElementCenterArrow onClick={pageBackward}>
        left
      </NavigationElementCenterArrow>
      <h1>{'Week ' + page}</h1>
      <NavigationElementCenterArrow onClick={pageForward}>
        right
      </NavigationElementCenterArrow>
    </NavigationElementCenterContainer>
  )
}

export default NavigationElementCenter