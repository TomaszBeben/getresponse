import styled, { css } from 'styled-components';
import { globalStyle } from '../../styles/globalStyles';
import { px2vw } from '../utils/px2vw';

const SpaceBetween = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const NavigationContainer = styled.div`
  ${SpaceBetween};
  @media (min-width: 1024px) {
    width: ${px2vw(1024)};
}`

export const NavigationWeekCounter = styled.h1`
  color: ${globalStyle.mainColor};
  font-size: ${px2vw(60)};
  @media (min-width: 1024px) {
    font-size: ${px2vw(50)};
}`

export const NavigationElementCenterContainer = styled.div`
  ${SpaceBetween};
  width: ${px2vw(90, 320)};
  min-height: ${px2vw(20, 320)};
  @media (min-width: 1024px) {
    width: ${px2vw(300)};
    min-height: ${px2vw(100)};
    height: 100%;
}`

export const NavigationArrow = styled.img`
  width: ${px2vw(80)};
  height: ${px2vw(80)};
  border-radius: 10px;
  :active{
    background-color: ${globalStyle.mainColor};
  }
  @media (min-width: 1024px) {
    width: ${px2vw(40)};
    height: ${px2vw(80)};
    :hover{
      background-color: ${globalStyle.mainColor};
    }
}`