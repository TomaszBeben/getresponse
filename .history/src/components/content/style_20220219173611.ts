import styled from 'styled-components';
import { globalStyle } from '../../styles/globalStyles';

export const ListOfContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border: 1px solid black;
    position: relative;
    :hover{
        border: 2px solid ${globalStyle.mainColor};
    }
`