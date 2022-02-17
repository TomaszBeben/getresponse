import React, { FC } from 'react'
import { TPosts } from '../../types/TPosts'

type props = {
  posts: TPosts[];
}

const Content: FC<props> = ({ posts }) => {
  return (
    <div>
      {
        posts.map((elem) => {
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