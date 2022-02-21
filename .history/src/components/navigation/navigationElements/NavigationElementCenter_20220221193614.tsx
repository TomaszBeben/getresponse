import React, {FC} from 'react'

import { NavigationElementCenterContainer, NavigationElementCenterArrow } from '../styles'
import {props} from '../types/props'

import left_arrow from '../../../images/leftArrow.svg'
import right_arrow from '../../../images/rightArrow.svg'

const NavigationElementCenter: FC<props> = ({ pageBackward, pageForward, page }) => {

  return (
    <NavigationElementCenterContainer>
      <NavigationElementCenterArrow src={left_arrow} onClick={pageBackward} alt="left arrow">
      </NavigationElementCenterArrow>
      <h1>{'Week ' + page}</h1>
      <NavigationElementCenterArrow onClick={pageForward}>
      <img src={right_arrow} alt="right arrow" />
      </NavigationElementCenterArrow>
    </NavigationElementCenterContainer>
  )
}

export default NavigationElementCenter