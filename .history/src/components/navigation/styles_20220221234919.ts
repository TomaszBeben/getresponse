import React from 'react';
import styled from 'styled-components';
import { globalStyle } from '../../styles/globalStyles';
import { px2vw } from '../utils/px2vw';

import LeftArrow  from '../../images/leftArrow.svg';
import Right_arrow from '../../images/rightArrow.svg';

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1024px) {
    width: ${px2vw(1024)};
  }
`

export const NavigationElementCenterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${px2vw(90, 320)};
  min-height: ${px2vw(20, 320)};

  @media (min-width: 1024px) {
    width: ${px2vw(300)};
    min-height: ${px2vw(100)};
    height: 100%;
  }
`

export const NavigationElementCenterArrow = styled.button`
    width: ${px2vw(100)};
    height: ${px2vw(80)};
    border: 1px solid ${globalStyle.backgroundColorSecondary};
    @media (min-width: 1024px) {
      width: ${px2vw(40)};
      height: ${px2vw(80)};
      :hover{
        border: none;
        background-color: ${globalStyle.backgroundColorMain};
        &svg {
    background-color: red;
  }
      }
  }
`;

export const NavigationLeftArrow = styled.div`
  background-color: red;
  -webkit-mask: url(logo.svg) no-repeat center;
  mask: url(LeftArrow) no-repeat center;
`

export const NavigationRightArrow = styled.div`

`