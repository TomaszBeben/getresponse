import styled from 'styled-components';

import { global } from '../../../styles/globalStyles'

export const NavigationContainer = styled.div`
  width: 100%;
  height: 20%;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`

export const NavigationElementCenterContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavigationElementCenterArrow = styled.button`
    width: 4rem;
    height: 6rem;
    border: 2px solid grey;
    border-radius: 6px;
    background-color: white;
    :hover{
        background-color: ${global.mainColor};
        border: 2px solid ${global.mainColor};
    }
`

export const NavigationLeftArrow = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavigationRightArrow = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`