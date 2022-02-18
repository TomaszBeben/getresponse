import React, {FC} from 'react';

import styled from 'styled-components';
import NavigationElementCenter from './navigationElements/NavigationElementCenter';

import {props} from './types/props'

const NavigationContainer = styled.div`
  width: 100%;
  height: 20%;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`

const Navigation:FC<props> = ({pageBackward, pageForward, page}) => {
  return (
    <NavigationContainer>
      <div>left</div>
      <NavigationElementCenter pageBackward={pageBackward} pageForward={pageForward} page={page}/>
      <div>right</div>
    </NavigationContainer>
  )
}

export default Navigation