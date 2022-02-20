import React from 'react'

const ContentHours = () => {
    
const times = ['6:00', '9:00', '12:00', '3:00', '6:00'];

    

    return (
        <div >
            {times.map((elem, i) => {
                return (
                    <p key={i} > {elem} </p>
                )
            })}
        </div>

    )
}

export default ContentHours