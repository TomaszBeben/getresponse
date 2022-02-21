import styled from 'styled-components';
import { px2vw } from '../utils/px2vw';
import { globalStyle } from '../../styles/globalStyles';

export const MainContainer = styled.div`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  padding: ${px2vw(20)};
  /* margin: ${px2vw(20)}; */
  background-color: ${globalStyle.backgroundColorMain};
  height: 100%;

  @media (min-width: 1024px) {
    width: ${px2vw(1100)};
    min-height: ${px2vw(globalStyle.mainContainerHeight)};
  }
`
// export const MainContainer = styled.div`
//   width: 900px;
//   height: 650px;
//   border: 1px solid black;
//   border-radius: 10px;
// `