import styled, {css} from 'styled-components';
import { globalStyle } from '../../styles/globalStyles';
import { px2vw } from '../utils/px2vw';
import backgroundPattern from '../../images/background-fabric.png'

const Center = css`
display: flex;
justify-content: center;
align-items: center;
`;

export const ListOfContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    width: ${px2vw(1024)};
    display: flex;
    flex-direction: row;
    /* height: 100%; */
}`

export const MainContent = styled.li`
  display: flex;
  flex-direction: row;
  flex-basis: 100%;
  flex: 1;
  height: ${px2vw(globalStyle.mainContentHeigth / 3)};//main content heigth: ;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    height: ${px2vw(globalStyle.mainContentHeigth)};//main content heigth: ;
}`

export const UL = styled.ul`
  width: 100%; //width of single elem content
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
    :nth-child(-n+3){
      border: none;
    }
    @media (min-width: 1024px) {
      height: 100%;
      display: flex;
      flex-direction: column;
      flex-basis: 100%;
      flex: 1;
    }
`
export const SingleHourElement = styled.div`
    ${Center};
    min-height: ${px2vw(84)};
    background-image: url(${backgroundPattern});
    width: 100%;
    border-top: 2px solid ${globalStyle.textColor};
    font-size: ${px2vw(30)};
    font-weight: 600;
    :nth-child(-n+2){
      border: none;
    }
    @media (min-width: 1024px) {
      font-size: ${px2vw(15)};
      font-weight: 600;
      min-height: ${px2vw(84)};
      background-image: url(${backgroundPattern});
      :nth-child(-n+2){
        border: none;
      }
    }
`
export const SingleHourElementEmpty = styled(SingleHourElement)`
  border: 0px solid black;
`

export const BorderContentElement = styled.div`
  /* min-height: ${px2vw(40)}; */
  background-color: white;
  width: ${px2vw(200)};
  @media (min-width: 1024px) {
    width: auto;
    min-height: ${px2vw(84)};
    background-color: white;
  }
`

export const SingleContentHeaderElement = styled(BorderContentElement)`
  ${Center};
  min-width: auto;
  font-size: ${px2vw(40)};
  font-weight: 600;
  color: ${globalStyle.secondaryColor};
  border-left: 1px solid ${globalStyle.textColor};
  background-image: url(${backgroundPattern});
  @media (min-width: 1024px) {
    background-image: none;
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
  flex-direction: row;
  width: auto;
  @media (min-width: 1024px) {
    /* width: auto; */
    flex-direction: column;
    flex: 1;
  }
`
export const SingleContentElementText = styled(BorderContentElement)`
  padding: ${px2vw(10)};
  border-top: 2px solid ${globalStyle.textColor};
  border-left: 1px solid ${globalStyle.textColor};
  width: ${px2vw(220)};
  @media (min-width: 1024px) {
    width: auto;
  }
`

export const SingleContentElementBottom = styled(SingleContentElement)`
  padding: ${px2vw(0)};
  background-image: url(${backgroundPattern});
  min-height:${px2vw(20)};
  display: flex;
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