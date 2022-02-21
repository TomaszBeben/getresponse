import React, {FC} from 'react'

import { NavigationElementCenterContainer, NavigationElementCenterArrow, NavigationArrow } from '../styles'
import {props} from '../types/props'

import left_arrow from '../../../images/leftArrow.svg'
import right_arrow from '../../../images/rightArrow.svg'

const NavigationElementCenter: FC<props> = ({ pageBackward, pageForward, page }) => {

  return (
    <NavigationElementCenterContainer>
      <NavigationArrow src={left_arrow} onClick={pageBackward} ></NavigationArrow>
      <h1>{'Week ' + page}</h1>
      <NavigationArrow src={right_arrow} onClick={pageForward} ></NavigationArrow>
    </NavigationElementCenterContainer>
  )
}

export default NavigationElementCenter