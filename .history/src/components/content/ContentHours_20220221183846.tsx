import React from 'react'
// import styled from 'styled-components';
// import { globalStyle } from '../../styles/globalStyles';
import {ContentHoursStyle, SingleHourElement} from './style';


const ContentHours = () => {
    const times = ['6:00 AM', '9:00 AM', '12:00 PM', '3:00 PM', '6:00 PM'];

    return (
        <ContentHoursStyle >
            <SingleHourElement></SingleHourElement>
            {times.map((elem, i) => {
                return (
                    <SingleHourElement key={i}> {elem} </SingleHourElement>
                )
            })}
            <SingleHourElement></SingleHourElement>
        </ContentHoursStyle>
    )
}

export default ContentHours