import styled from 'styled-components';

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
    border: 2px solid orange;
    border-radius: 20px;
    background-color: white;
    :hover{
        background-color: #FF4500;
    }
`