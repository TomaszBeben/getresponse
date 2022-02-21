import React, { FC } from 'react'
// import styled from 'styled-components';
// import { globalStyle } from '../../styles/globalStyles';

import { TPosts } from '../types/TPosts'
import { POSTS_PER_PAGE } from '../utils/constants'
import ContentHours from './ContentHours'

import { ListOfContentContainer, MainContent, SingleContentElementBottom, SingleContentHeaderElement , SingleContentElement, UL} from './style'

type props = {
  posts: TPosts[];
  page: number;
}

const Content: FC<props> = ({ posts, page }) => {
  const startIndex: number = (page - 1) * POSTS_PER_PAGE;
  const selectedPosts: TPosts[] = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <ListOfContentContainer>
      <ContentHours />
      {selectedPosts.map((elem) => {
        return (
          <UL key={elem.id}>
            <MainContent>
              <SingleContentHeaderElement>{'DAY ' + elem.id}</SingleContentHeaderElement>
              <SingleContentElement>
                <div style={{padding: '10px'}} >{elem.Column_1}</div>
              </SingleContentElement>
              <SingleContentElement>{elem.Column_2}</SingleContentElement>
              <SingleContentElement>{elem.Column_3}</SingleContentElement>
              <SingleContentElement>{elem.Column_4}</SingleContentElement>
              <SingleContentElement>{elem.Column_5}</SingleContentElement>
              <SingleContentElement>
                <SingleContentElementBottom>Carb</SingleContentElementBottom>
                <SingleContentElementBottom>ICON</SingleContentElementBottom>
              </SingleContentElement>
            </MainContent>
          </UL>
        )
      })
      }
    </ListOfContentContainer>
  )
}

export default Content