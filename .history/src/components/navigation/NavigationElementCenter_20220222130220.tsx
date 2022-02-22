import React, {FC} from 'react';

import { NavigationElementCenterContainer, NavigationArrow, NavigationWeekCounter } from './navigationStyles';
import {TpageMove} from '../types/TpageMove';

import left_arrow from '../../images/leftArrow.svg';
import right_arrow from '../../images/rightArrow.svg';

const NavigationElementCenter: FC<TpageMove> = ({ pageBackward, pageForward, page }) => {

  return (
    <NavigationElementCenterContainer>
      <NavigationArrow src={left_arrow} onClick={pageBackward} ></NavigationArrow>
      <NavigationWeekCounter>{'Week ' + page}</NavigationWeekCounter>
      <NavigationArrow src={right_arrow} onClick={pageForward} ></NavigationArrow>
    </NavigationElementCenterContainer>
  );
};

export default NavigationElementCenter;