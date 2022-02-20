import React from 'react'

type props = {
    hour: string;
    time: string;
}

const ContentHours: FC<prpps> = ({ hour, time }) => {
    return (
        <>
            <p>{hour}</p>
            <p>{time}</p>
        </>

    )
}

export default ContentHours