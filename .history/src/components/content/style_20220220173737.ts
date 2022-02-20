import styled from 'styled-components';
import { globalStyle } from '../../styles/globalStyles';

export const ListOfContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border: 1px solid black;
    position: relative;
`
// export const Grid = styled.div`
//     display: grid;
//     grid-template-columns: repeat(5);
//     grid-template-rows: 50px;
// `;

export const Grid = styled.li`
  display: grid;
  grid-template-columns: repeat(5);
  grid-template-rows: 40px;
  /* grid-template-rows: 4rem ; */
  grid-gap: 0px;
  box-sizing: border-box;
  :hover{
    outline: 3px solid ${globalStyle.mainColor};
    outline-offset: -3px;
  }
`

export const ContentHoursStyle = styled(Grid)`
    width: 8%;
    background-color: ${globalStyle.backgroundColorSecondary};
`
export const SingleHourElement = styled.p`
    display: flex;
    justify-self: center;
    align-self: center;
    border-bottom: 1px solid ${globalStyle.backgroundColorSecondary};
`
export const BorderContentElement = styled.p`
  border-bottom: 1px solid ${globalStyle.backgroundColorSecondary};
`

export const SingleContentElement = styled(BorderContentElement)`
  padding-top: 1rem;
  padding-left: 0.5rem;
  min-width: 12rem;
  height: 7rem;
`
export const SingleContentHeaderElement = styled(BorderContentElement)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SingleContentElementColored = styled(SingleContentElement)`
  background-color: ${globalStyle.backgroundColorSecondary};
`

