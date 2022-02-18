import styled from 'styled-components';

const test = 'white';

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
    background-color: `${test}`;
    :hover{
        background-color: #FF4500;
        border: 2px solid #FF4500;
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