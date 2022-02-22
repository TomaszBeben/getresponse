import React, { FC } from 'react';

import NavigationElementCenter from './NavigationElementCenter';
import { NavigationContainer } from './navigationStyles'
import { props } from '../types/TpageMove'

const Navigation: FC<props> = ({ pageBackward, pageForward, page }) => {

  return (
    <NavigationContainer>
      {/* will be icons */}
      <div>left</div>
      <NavigationElementCenter pageBackward={pageBackward} pageForward={pageForward} page={page} />
      {/* will be icons */}
      <div>right</div>
    </NavigationContainer>
  )
}

export default Navigation