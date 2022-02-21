import React, {FC} from 'react'

import { NavigationElementCenterContainer, NavigationElementCenterArrow, NavigationLeftArrow } from '../styles'
import {props} from '../types/props'

import left_arrow from '../../../images/leftArrow.svg'
import right_arrow from '../../../images/rightArrow.svg'

const NavigationElementCenter: FC<props> = ({ pageBackward, pageForward, page }) => {

  return (
    <NavigationElementCenterContainer>
      <NavigationElementCenterArrow onClick={pageBackward}>
        {/* <img src={left_arrow} alt="left arrow" /> */}
        <NavigationLeftArrow ></NavigationLeftArrow>
      </NavigationElementCenterArrow>
      <h1>{'Week ' + page}</h1>
      <NavigationElementCenterArrow onClick={pageForward}>
      <img src={right_arrow} alt="right arrow" />
      </NavigationElementCenterArrow>
    </NavigationElementCenterContainer>
  )
}

export default NavigationElementCenter