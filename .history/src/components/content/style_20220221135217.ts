import styled from 'styled-components';
import { globalStyle } from '../../styles/globalStyles';
import { px2vw } from '../utils/px2vw';

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
    height: ${px2vw(600)};//main content width
`

export const UL = styled.ul`
width: ${px2vw(120)};
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
`
export const BorderContentElement = styled.p`
  min-height: ${px2vw(84)};
`

export const SingleContentElement = styled(BorderContentElement)`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`
export const SingleContentHeaderElement = styled(BorderContentElement)`
  height: auto;
`
export const SingleContentElementColored = styled(SingleContentElement)`
`

