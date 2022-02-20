import React from 'react'
import styled from 'styled-components';
import { globalStyle } from '../../styles/globalStyles';

const ContentHours = () => {
    const times = ['6:00', '9:00', '12:00', '3:00', '6:00'];

    const ContentHoursStyle = styled.div`
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