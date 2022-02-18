import React, { useState, useEffect } from 'react';

import 
import { fetchData } from '../../api/fetchData'
import { TPosts } from '../../types/TPosts'

import Content from '../content/Content'
import Navigation from '../navigation/Navigation'

const Main = () => {
  const defaultState: TPosts[] = [];
  const [posts, setPosts] = useState < TPosts[] > (defaultState)
  const [error, setError] = useState < string > ('')
  const [loading, setLoading] = useState < boolean > (false)
  const [totalPages, setTotalPages] = useState < number > (0)
  const [page, setPage] = useState < number > (1)

  useEffect(() => {
    fetchData(
      setPosts,
      setError,
      setLoading,
    )
  }, [posts])

  useEffect(() => {
    setTotalPages(Math.ceil(posts.length / 7))
  }, [posts])

  const pageForward = () => {
    page >= totalPages
      ? setPage(1)
      : setPage(page => page + 1)
  }
  const pageBackward = () => {
    page <= 1
      ? setPage(totalPages)
      : setPage(page => page - 1)
  }

  return (
      <MainContainer>
        <Navigation
          pageBackward={() => pageBackward()}
          pageForward={() => pageForward()}
          page={page} />
        {
          loading
            ? <p>Loading...</p>
            : <Content posts={posts} page={page} />
        }
        {error !== '' ? <h1>{error}</h1> : ''}
      </MainContainer>
  )
}

      export default Main