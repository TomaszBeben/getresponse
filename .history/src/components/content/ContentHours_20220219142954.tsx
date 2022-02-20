import React from 'react'
import styled from 'styled-components';

const ContentHours = () => {
    
const times = ['6:00', '9:00', '12:00', '3:00', '6:00'];

    const ContentHourStyle = styled.div`
        width: 20%;
    `

    return (
        <ContentHourStyle >
            {times.map((elem, i) => {
                return (
                    <p key={i}> {elem} </p>
                )
            })}
        </ContentHourStyle>

    )
}

export default ContentHours