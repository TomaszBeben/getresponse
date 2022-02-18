import React, { FC } from 'react'
import { TPosts } from '../../types/TPosts'
import { POSTS_PER_PAGE } from '../../utils/constants'

type props = {
  posts: TPosts[];
  page: number;
}

const Content: FC<props> = ({ posts, page }) => {
  const startIndex: number = ( page - 1 ) * POSTS_PER_PAGE;
  const selectedPosts: TPosts[] = posts.slice(startIndex, startIndex * POSTS_PER_PAGE)
  const selectedPosts: TPosts[] = posts.slice(startIndex, startIndex * POSTS_PER_PAGE)

  console.log(startIndex);
  console.log(POSTS_PER_PAGE);
  console.log(selectedPosts);
  return (
    <div>
      {
        selectedPosts.map((elem, userId) => {
          return (
            <ul key={elem.userId}>
              <li>
                <p>{elem.userId}</p>
                <p>{elem.id}</p>
                <p>{elem.body}</p>
                <p>{elem.title}</p>
              </li>
            </ul>
          )
        })
      }
    </div>
  )
}

export default Content