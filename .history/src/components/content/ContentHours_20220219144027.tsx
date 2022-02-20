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
    const SingleHour = styled.p`
        width: 20px;
        height: 20px;
        border: 1px solid red;
    `

    return (
        <ContentHoursStyle >
            {times.map((elem, i) => {
                return (
                    <SingleHour key={i}> {elem} </SingleHour>
                )
            })}
        </ContentHoursStyle>

    )
}

export default ContentHours