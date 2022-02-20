import React, { FC } from 'react'
import { TPosts } from '../types/TPosts'
import { POSTS_PER_PAGE } from '../utils/constants'

type props = {
  posts: TPosts[];
  page: number;
}

const Content: FC<props> = ({ posts, page }) => {
  const startIndex: number = ( page - 1 ) * POSTS_PER_PAGE;
  const selectedPosts: TPosts[] = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  console.log('6:00' + '3');

  return (
    <div>
      {selectedPosts.map((elem) => {
          return (
            <ul key={elem.id}>
              <li>
                <p>{elem.id}</p>
                <p>{elem.Column_1}</p>
                <p>{elem.Column_2}</p>
                <p>{elem.Column_3}</p>
                <p>{elem.Column_4}</p>
                <p>{elem.Column_5}</p>
              </li>
            </ul>
          )
        })
      }
    </div>
  )
}

export default Content