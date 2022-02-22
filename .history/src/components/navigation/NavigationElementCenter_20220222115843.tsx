import React, {FC} from 'react'

import { NavigationElementCenterContainer, NavigationArrow, NavigationWeekCounter } from './navigationStyles'
import {props} from './types/props'

import left_arrow from '../../images/leftArrow.svg'
import right_arrow from '../../images/rightArrow.svg'

const NavigationElementCenter: FC<props> = ({ pageBackward, pageForward, page }) => {

  return (
    <NavigationElementCenterContainer>
      <NavigationArrow src={left_arrow} onClick={pageBackward} ></NavigationArrow>
      <NavigationWeekCounter>{'Week ' + page}</NavigationWeekCounter>
      <NavigationArrow src={right_arrow} onClick={pageForward} ></NavigationArrow>
    </NavigationElementCenterContainer>
  )
}

export default NavigationElementCenter