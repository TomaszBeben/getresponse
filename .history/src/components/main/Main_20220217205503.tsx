import React from 'react'

import styled from 'styled-components'

import Content from '../content/Content'
import Navigation from '../navigation/Navigation'

const MainContainer = styled.div`
  width: 800px;
  height: 650px;
  border: 1px solid black;
`

const Main = () => {

  return (
    <MainContainer>
        <Navigation/>
        <Content/>
    </MainContainer>
  )
}

export default Main