import React, { FC } from 'react'
import styled from 'styled-components';

import { TPosts } from '../types/TPosts'
import { POSTS_PER_PAGE } from '../utils/constants'
import ContentHours from './ContentHours'

import { ListOfContentContainer } from './style'

type props = {
  posts: TPosts[];
  page: number;
}

const SingleContentElement = styled.p`
  padding-top: 1rem;
  padding-left: 1rem;
  width: 100%;
  height: 7rem;
  border: 1px solid red;
`
const SingleContentHeaderElement = styled.p`
  /* width: 100%;
  height: 7rem; */
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;

`

const Grid = styled.li`
  display: grid;
  grid-template-columns: repeat(5);
  grid-template-rows: 50px 50px 50px 50px 50px 50px 50px 50px ;
  /* grid-gap: 5px; */
`;

const Content: FC<props> = ({ posts, page }) => {
  const startIndex: number = (page - 1) * POSTS_PER_PAGE;
  const selectedPosts: TPosts[] = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <ListOfContentContainer>
      <ContentHours />
      {selectedPosts.map((elem) => {
        return (
          <ul key={elem.id}>
            <Grid>
              <SingleContentHeaderElement>{'DAY ' + elem.id}</SingleContentHeaderElement>
              <SingleContentElement>{elem.Column_1}</SingleContentElement>
              <SingleContentElement>{elem.Column_2}</SingleContentElement>
              <SingleContentElement>{elem.Column_3}</SingleContentElement>
              <SingleContentElement>{elem.Column_4}</SingleContentElement>
              <SingleContentElement>{elem.Column_5}</SingleContentElement>
              <SingleContentElement></SingleContentElement>
            </Grid>
          </ul>
        )
      })
      }
    </ListOfContentContainer>
  )
}

export default Content