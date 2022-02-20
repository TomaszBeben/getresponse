import styled from 'styled-components';

import { globalStyle } from '../../styles/globalStyles'
import { px2vw } from '../utils/px2vw';

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1024px) {
    width: ${px2vw(50)};
    min-height: ${px2vw(40)};
  }
`
// export const NavigationContainer = styled.div`
//   width: 100%;
//   height: 20%;
//   border-bottom: 1px solid black;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem;
// `

export const NavigationElementCenterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${px2vw(70, 320)};
  min-height: ${px2vw(20, 320)};

  @media (min-width: 1024px) {
    width: ${px2vw(800)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`
// export const NavigationElementCenterContainer = styled.div`
//   width: 40%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `

export const NavigationElementCenterArrow = styled.button`
    
`
// export const NavigationElementCenterArrow = styled.button`
//     width: 4rem;
//     height: 6rem;
//     border: 1px solid grey;
//     border-radius: 6px;
//     background-color: white;
//     :hover{
//         background-color: ${globalStyle.mainColor};
//         border: 2px solid ${globalStyle.mainColor};
//     }
// `

export const NavigationLeftArrow = styled.div`
  
`
// export const NavigationLeftArrow = styled.div`
//   width: 40%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `

export const NavigationRightArrow = styled.div`

`
// export const NavigationRightArrow = styled.div`
//   width: 40%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `