import React, { FC } from 'react';

import NavigationElementCenter from './navigationElements/NavigationElementCenter';
import { NavigationContainer } from './styles'
import { props } from './types/props'

const Navigation: FC<props> = ({ pageBackward, pageForward, page }) => {

  return (
    <NavigationContainer>
      <div>left</div>
      <NavigationElementCenter pageBackward={pageBackward} pageForward={pageForward} page={page} />
      <div>right</div>
    </NavigationContainer>
  )
}

export default Navigation