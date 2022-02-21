import styled from 'styled-components';
import { globalStyle } from '../../styles/globalStyles';
import { px2vw } from '../utils/px2vw';

export const ListOfContentContainer = styled.div`
    width: 100%;
    /* width: ${px2vw(70, 320)}; */
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;

    @media (min-width: 1024px) {
    width: ${px2vw(1024)};
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: 100%;
  }
`
// export const ListOfContentContainer = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: space-around;
//     border: 1px solid black;
//     position: relative;
// `
// export const Grid = styled.div`
//     display: grid;
//     grid-template-columns: repeat(5);
//     grid-template-rows: 50px;
// `;

export const MainContent = styled.li`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    height: ${px2vw(150)};
`

export const UL = styled.ul`
width: ${px2vw(120)};
height: ${px2vw(120)};
`
// export const Grid = styled.li`
//   display: grid;
//   grid-template-columns: repeat(5);
//   grid-template-rows: 40px;
//   /* grid-template-rows: 4rem ; */
//   grid-gap: 0px;
//   box-sizing: border-box;
//   :hover{
//     outline: 3px solid ${globalStyle.mainColor};
//     outline-offset: -3px;
//   }
// `

export const ContentHoursStyle = styled(MainContent)`
    /* display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%; */
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
`
// export const ContentHoursStyle = styled(Grid)`
//     width: 8%;
//     background-color: ${globalStyle.backgroundColorSecondary};
// `
export const SingleHourElement = styled.p`
    
`
// export const SingleHourElement = styled.p`
//     display: flex;
//     justify-self: center;
//     align-self: center;
//     border-bottom: 1px solid ${globalStyle.backgroundColorSecondary};
// `
export const BorderContentElement = styled.p`
  
`
// export const BorderContentElement = styled.p`
//   border-bottom: 1px solid ${globalStyle.backgroundColorSecondary};
// `

export const SingleContentElement = styled(BorderContentElement)`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`
// export const SingleContentElement = styled(BorderContentElement)`
//   padding-top: 1rem;
//   padding-left: 0.5rem;
//   min-width: 12rem;
//   height: 7rem;
// `
export const SingleContentHeaderElement = styled(BorderContentElement)`
  
`
// export const SingleContentHeaderElement = styled(BorderContentElement)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

export const SingleContentElementColored = styled(SingleContentElement)`
`
// export const SingleContentElementColored = styled(SingleContentElement)`
//   background-color: ${globalStyle.backgroundColorSecondary};
// `

