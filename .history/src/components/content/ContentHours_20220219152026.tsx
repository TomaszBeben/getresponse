import React from 'react'
import styled from 'styled-components';
import { globalStyle } from '../../styles/globalStyles';

const ContentHours = () => {
    const times = ['6:00 AM', '9:00 AM', '12:00 PM', '3:00 PM', '6:00 PM'];

    const Grid = styled.div`
        display: grid;
        grid-template-columns: repeat(5);
        grid-template-rows: 50px 50px;
        grid-gap: 5px;
    `;

    const ContentHoursStyle = styled(Grid)`
        width: 10%;
        background-color: ${globalStyle.backgroundColorSecondary};
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    `
    const SingleHourElement = styled.p`
        width: 100%;
        height: 7rem;
        border: 1px solid red;
    `

    return (
        <ContentHoursStyle >
            <SingleHourElement></SingleHourElement>
            {times.map((elem, i) => {
                return (
                    <SingleHourElement key={i}> {elem} </SingleHourElement>
                )
            })}
        </ContentHoursStyle>
    )
}

export default ContentHours