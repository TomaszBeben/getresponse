import React from 'react'
import styled from 'styled-components';
import { globalStyle } from '../../styles/globalStyles';

const ContentHours = () => {
    const times = ['6:00 AM', '9:00 AM', '12:00 PM', '3:00 PM', '6:00 PM'];

    const Grid = styled.div`
        display: grid;
        grid-template-columns: repeat(5);
        /* grid-template-rows: 50px; */
        grid-template-rows: repeat(3, minmax(0));
        /* grid-gap: 5px; */
    `;

    const ContentHoursStyle = styled(Grid)`
        width: 8%;
        background-color: ${globalStyle.backgroundColorSecondary};
    `
    const SingleHourElement = styled.p`
        border-bottom: 1px solid ${globalStyle.backgroundColorSecondary};
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