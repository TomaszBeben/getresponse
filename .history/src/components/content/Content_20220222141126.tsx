import React, { FC } from 'react';

import { TPosts } from '../types/TPosts';
import { Tcontent } from '../types/Tcontent';
import { POSTS_PER_PAGE } from '../utils/constants';
import ContentHours from './ContentHours';

import {
  ListOfContentContainer,
  MainContent,
  SingleContentElementText,
  SingleContentElementBottom,
  SingleContentHeaderElement ,
  SingleContentElement,
  SingleContentContainerBottom,
  UL}
from './contentStyles';
import ContentData from './ContentData';

const Content: FC<Tcontent> = ({ posts, page }) => {
  const startIndex: number = (page - 1) * POSTS_PER_PAGE;
  const selectedPosts: TPosts[] = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <ListOfContentContainer>
      <ContentHours />
      <ContentData />
    </ListOfContentContainer>
  )
};

export default Content