import React, { FC } from 'react'
import styled from 'styled-components';
import { globalStyle } from '../../styles/globalStyles';

import { TPosts } from '../types/TPosts'
import { POSTS_PER_PAGE } from '../utils/constants'
import ContentHours from './ContentHours'

import { ListOfContentContainer } from './style'

type props = {
  posts: TPosts[];
  page: number;
}

const BorderContentElement = styled.p`
  border-bottom: 1px solid ${globalStyle.backgroundColorSecondary};
`

const SingleContentElement = styled(BorderContentElement)`
  padding-top: 1rem;
  padding-left: 0.5rem;
  min-width: 12rem;
  height: 7rem;
`
const SingleContentHeaderElement = styled(BorderContentElement)`
  display: flex;
  justify-content: center;
  align-items: center;

`

const SingleContentElementColored = styled(SingleContentElement)`
  background-color: ${globalStyle.backgroundColorSecondary};
`

const Grid = styled.li`
  display: grid;
  grid-template-columns: repeat(5);
  grid-template-rows: 50px;
  grid-gap: 0px;
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
              <SingleContentElementColored>
                workout elem
              </SingleContentElementColored>
            </Grid>
          </ul>
        )
      })
      }
    </ListOfContentContainer>
  )
}

export default Content