import React, {useState, useEffect, Dispatch, SetStateAction} from 'react'

import styled from 'styled-components'
import { fetchData } from '../../api/fetchData'
import { TPosts } from '../../types/TPosts'

import Content from '../content/Content'
import Navigation from '../navigation/Navigation'

const MainContainer = styled.div`
  width: 900px;
  height: 650px;
  border: 1px solid black;
  border-radius: 10px;
`

const Main = () => {
  const defaultState: TPosts[] = [];
  const [posts, setPosts] = useState <TPosts[]> (defaultState)
  const [error, setError] = useState < string > ('')

  useEffect(()=>{
    fetchData(setPosts, setError)
  }, [])

  console.log(posts);
  return (
    <MainContainer>
        <Navigation/>
        <Content posts/>
    </MainContainer>
  )
}

export default Main