import React, {FC} from 'react'
import { TPosts } from '../../types/TPosts'

type props = {
  posts: TPosts[];
}

const Content: FC<props> = ({posts}) => {
  return (
    <div>
      {
        posts.map((elem) => {
          <ul key= {elem.id}>
            <li>
              <p>{elem.userId}</p>
              <p>{elem.id}</p>
            </li>
          </ul>
        })
      }
    </div>
  )
}

export default Content