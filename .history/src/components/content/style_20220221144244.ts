import styled from 'styled-components';
import { globalStyle } from '../../styles/globalStyles';
import { px2vw } from '../utils/px2vw';
import bacgroundPattern from '../../images/background-fabric.png'

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
  }
`

export const MainContent = styled.li`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    height: ${px2vw(globalStyle.mainContentHeigth)};//main content width: ;
`

export const UL = styled.ul`
    width: ${px2vw(135)}; //width of single elem content
`

export const ContentHoursStyle = styled(MainContent)`
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
`
export const SingleHourElement = styled.p`
    min-height: ${px2vw(84)};
    background-color: ${globalStyle.backgroundColorSecondary};
`
export const BorderContentElement = styled.p`
  min-height: ${px2vw(84)};
  background-color: white;
`

export const SingleContentElement = styled(BorderContentElement)`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`
export const SingleContentHeaderElement = styled(BorderContentElement)`
  font-size: ${px2vw(27)};
  color: ${globalStyle.mainColor};
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SingleContentElementBottom = styled(SingleContentElement)`
  background-image: '';
  /* background-color: ${globalStyle.backgroundColorSecondary}; */
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  flex: 1;
  min-height:${px2vw(20)};
`
