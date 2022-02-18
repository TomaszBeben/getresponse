import React, { FC } from 'react'
import { TPosts } from '../../types/TPosts'
import { POSTS_PER_PAGE } from '../../utils/constants'

type props = {
  posts: TPosts[];
  page: number;
  loading: boolean;
}

const Content: FC<props> = ({ posts, page, loading }) => {
  const startIndex: number = ( page - 1 ) * POSTS_PER_PAGE;
  // const selectedPosts: TPosts[] = posts.splice(startIndex, startIndex * POSTS_PER_PAGE)
  const selectedPosts: TPosts[] = posts.splice(0,7)

  // console.log(posts);
  // console.log(startIndex);
  // console.log(POSTS_PER_PAGE);
  console.log('selected: ', selectedPosts);
  return (
    <div>
      {loading ? 
        <p>Loading...</p> :
        selectedPosts.map((elem, id) => {
          return (
            <ul key={elem.id}>
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