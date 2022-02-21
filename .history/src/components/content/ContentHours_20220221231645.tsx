import React from 'react'
// import styled from 'styled-components';
// import { globalStyle } from '../../styles/globalStyles';
import {ContentHoursStyle, SingleHourElement, SingleHourElementEmpty} from './style';


const ContentHours = () => {
    const times = ['6:00 AM', '9:00 AM', '12:00 PM', '3:00 PM', '6:00 PM'];

    return (
        <ContentHoursStyle >
            <SingleHourElementEmpty></SingleHourElementEmpty>
            {times.map((elem, i) => {
                return (
                    <SingleHourElement key={i}> {elem} </SingleHourElement>
                )
            })}
            <SingleHourElementEmpty></SingleHourElementEmpty>
        </ContentHoursStyle>
    )
}

export default ContentHours