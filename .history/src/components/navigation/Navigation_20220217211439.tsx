import React from 'react';

import styled from 'styled-components';
import NavigationElementCenter from './navigationElements/NavigationElementCenter';

const NavigationContainer = styled.div`
  width: 100%;
  height: 20%;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`

const Navigation = () => {
  return (
    <NavigationContainer>
      <div>
        <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill="#555" fill-rule="evenodd" d="M7.05307007,2.15808105 L14.2962587,9.41418482 C14.4320862,9.5496827 14.5,9.71077067 14.5,9.89744874 C14.5,10.0841268 14.4320862,10.2497803 14.2962587,10.3944092 C11.6760845,12.9498393 9.15095523,15.4168071 6.72087106,17.7953128 C6.5962677,17.912323 6.09560574,18.2032928 5.70989407,17.7705688 C5.3241824,17.3378448 5.55848694,16.9602509 5.70989407,16.8045692 C7.97174895,14.594209 10.3279004,12.2918355 12.7783485,9.89744874 L6.03100586,3.13816833 C5.78524099,2.79925826 5.80526899,2.48632792 6.09108986,2.19937732 C6.37691073,1.91242672 6.6975708,1.8986613 7.05307007,2.15808105 Z" />
        </svg>
      </div>
      <NavigationElementCenter />
      <div>right</div>
    </NavigationContainer>
  )
}

export default Navigation