import React from 'react'

import styled from 'styled-components'

import Content from '../content/Content'
import Navigation from '../navigation/Navigation'




const Main = () => {

// const MainContainer = styled.div`
//   width: 200px;
//   height: 200px;
//   border: 1px solid black
// `

  return (
    <MainContainer>
        <Navigation/>
        <Content/>
    </MainContainer>
  )
}

export default Main