import React, { FC } from 'react';

import NavigationElementCenter from './NavigationElementCenter';
import { NavigationContainer } from './navigationStyles'
import { TpageMove } from '../types/TpageMove'

const Navigation: FC<TpageMove> = ({ pageBackward, pageForward, page }) => {

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