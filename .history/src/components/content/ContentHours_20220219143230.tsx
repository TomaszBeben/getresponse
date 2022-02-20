import React from 'react'
import styled from 'styled-components';

const ContentHours = () => {
    
const times = ['6:00', '9:00', '12:00', '3:00', '6:00'];

    const ContentHoursStyle = styled.div`
        width: 10%;
        background-color: ;
    `
    const ContentHourStyle = styled.p`
        width: 10%;
        height: 10%;
    `

    return (
        <ContentHoursStyle >
            {times.map((elem, i) => {
                return (
                    <p key={i}> {elem} </p>
                )
            })}
        </ContentHoursStyle>

    )
}

export default ContentHours