import styled from 'styled-components';
import { globalStyle } from '../../styles/globalStyles';

export const ListOfContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border: 1px solid black;
    position: relative;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(5);
    grid-template-rows: 50px;
`;

const ContentHoursStyle = styled(Grid)`
    width: 8%;
    background-color: ${globalStyle.backgroundColorSecondary};
`
const SingleHourElement = styled.p`
    display: flex;
    justify-self: center;
    align-self: center;
    border-bottom: 1px solid ${globalStyle.backgroundColorSecondary};
`
