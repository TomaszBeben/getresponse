import React, { FC } from 'react'
import { TPosts } from '../types/TPosts'
import { POSTS_PER_PAGE } from '../utils/constants'
import ContentHours from './ContentHours'

import { ListOfContentContainer } from './style'

type props = {
  posts: TPosts[];
  page: number;
}

const SingleContentElement = styled.SingleContentElement`
        width: 100%;
        height: 7rem;
        border: 1px solid red;
    `

const Content: FC<props> = ({ posts, page }) => {
  const startIndex: number = ( page - 1 ) * POSTS_PER_PAGE;
  const selectedPosts: TPosts[] = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <ListOfContentContainer>
      <ContentHours/>
      {selectedPosts.map((elem) => {
          return (
            <ul key={elem.id}>
              <li>
                <SingleContentElement>{elem.id}</SingleContentElement>
                <SingleContentElement>{elem.Column_1}</SingleContentElement>
                <SingleContentElement>{elem.Column_2}</SingleContentElement>
                <SingleContentElement>{elem.Column_3}</SingleContentElement>
                <SingleContentElement>{elem.Column_4}</SingleContentElement>
                <SingleContentElement>{elem.Column_5}</SingleContentElement>
              </li>
            </ul>
          )
        })
      }
    </ListOfContentContainer>
  )
}

export default Content