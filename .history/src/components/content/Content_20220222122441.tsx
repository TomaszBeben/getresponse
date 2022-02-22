import React, { FC } from 'react'
// import styled from 'styled-components';
// import { globalStyle } from '../../styles/globalStyles';

import { TPosts } from '../types/TPosts'
import { POSTS_PER_PAGE } from '../utils/constants'
import ContentHours from './ContentHours'

import {
  ListOfContentContainer,
  MainContent,
  SingleContentElementText,
  SingleContentElementBottom,
  SingleContentHeaderElement ,
  SingleContentElement,
  SingleContentContainerBottom,
  UL} from './constentStyles'

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
                <SingleContentElementText>{elem.Column_1}</SingleContentElementText>
              </SingleContentElement>
              <SingleContentElement>
              <SingleContentElementText>{elem.Column_2}</SingleContentElementText>
              </SingleContentElement>
              <SingleContentElement>
                <SingleContentElementText>{elem.Column_3}</SingleContentElementText>
                </SingleContentElement>
              <SingleContentElement>
                <SingleContentElementText>{elem.Column_4}</SingleContentElementText>
                </SingleContentElement>
              <SingleContentElement>
                <SingleContentElementText>{elem.Column_5}</SingleContentElementText>
                </SingleContentElement>
              <SingleContentContainerBottom>
                <SingleContentElementBottom>Carb</SingleContentElementBottom>
                <SingleContentElementBottom>ICON</SingleContentElementBottom>
              </SingleContentContainerBottom>
            </MainContent>
          </UL>
        )
      })
      }
    </ListOfContentContainer>
  )
}

export default Content