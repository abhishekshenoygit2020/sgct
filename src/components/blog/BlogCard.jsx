import React from "react"
import { blog } from "../../dummydata"

const BlogCard = () => {
  return (
    <>
      {blog.map((val) => (
        <div className='items shadow'>
          <div className='img'>
            <img src={val.cover} alt='' />
          </div>
        </div>
      ))}
    </>
  )
}

export default BlogCard
