import styled from 'styled-components';
import { globalStyle } from '../../styles/globalStyles';
import { px2vw } from '../utils/px2vw';
import backgroundPattern from '../../images/background-fabric.png'

// @media (min-width: 1024px) {
//   
// }

export const ListOfContentContainer = styled.div`
  width: 100%;
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
}`

export const MainContent = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  height: ${px2vw(globalStyle.mainContentHeigth)};//main content heigth: ;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    height: ${px2vw(globalStyle.mainContentHeigth)};//main content heigth: ;
}`

export const UL = styled.ul`
  width: ${px2vw(135)}; //width of single elem content
  :hover{
    outline: 4px solid ${globalStyle.mainColor};
    outline-offset: -4px;
  }
  @media (min-width: 1024px) {
    width: ${px2vw(135)}; //width of single elem content
    :hover{
      outline: 4px solid ${globalStyle.mainColor};
      outline-offset: -4px;
    }
}


`

export const ContentHoursStyle = styled(MainContent)`
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-basis: 100%;
    flex: 1;
    width: 100%;
    @media (min-width: 1024px) {
      height: 100%;
      display: flex;
      flex-direction: column;
      flex-basis: 100%;
      flex: 1;
    }
`
export const SingleHourElement = styled.p`
    min-height: ${px2vw(84)};
    background-image: url(${backgroundPattern});
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 2px solid ${globalStyle.textColor};
    @media (min-width: 1024px) {
      min-height: ${px2vw(84)};
      background-image: url(${backgroundPattern});
    }
`
export const SingleHourElementEmpty = styled(SingleHourElement)`
  border: 0px solid black;
`

export const BorderContentElement = styled.p`
  min-height: ${px2vw(84)};
  background-color: white;
  @media (min-width: 1024px) {
    min-height: ${px2vw(84)};
    background-color: white;
  }
`

export const SingleContentHeaderElement = styled(BorderContentElement)`
  font-size: ${px2vw(27)};
  font-weight: 600;
  color: ${globalStyle.secondaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid ${globalStyle.textColor};
  @media (min-width: 1024px) {
    font-size: ${px2vw(27)};
    font-weight: 600;
    color: ${globalStyle.secondaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const SingleContentElement = styled(BorderContentElement)`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    flex: 1;
  }
`
export const SingleContentElementText = styled(BorderContentElement)`
  padding: ${px2vw(10)};
  border-top: 2px solid ${globalStyle.textColor};
  border-left: 1px solid ${globalStyle.textColor};
`

export const SingleContentElementBottom = styled(SingleContentElement)`
  padding: ${px2vw(0)};
  background-image: url(${backgroundPattern});
  display: flex;
  min-height:${px2vw(20)};
  justify-content: center;
  align-items: center;
  border-top: 2px solid ${globalStyle.textColor};
  border-right: 1px solid ${globalStyle.textColor};
  @media (min-width: 1024px) {
    background-image: url(${backgroundPattern});
    display: flex;
    min-height:${px2vw(20)};
    justify-content: center;
    align-items: center;
  }
`


