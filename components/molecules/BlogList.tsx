import { BlogListProps } from '@/types/common'
import React, { FC } from 'react'
import BlogCard from '../atoms/BlogCard'

const BlogList: FC<BlogListProps> = ({ blogs }) => {
  return (
    <ul className='mb-10 grid gap-[32px] px-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </ul>
  )
}
export default BlogList
