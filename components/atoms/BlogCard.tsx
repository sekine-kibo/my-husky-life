import { BlogCardProps } from '@/types/common'
import Image, { ImageLoaderProps } from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

const microCMSLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  return (
    <li>
      <article className='relative col-span-1 inline-grid aspect-[16/18] rounded-lg py-4 px-4 shadow-lg shadow-blue-700/50 ring-1 ring-neutral-300/80 dark:ring-neutral-300/20'>
        <time
          dateTime={blog.updatedAt}
          itemProp='modified'
          className='block mb-3 text-sm font-medium text-neutral-400 dark:text-neutral-500'
          suppressHydrationWarning={true}
        >
          {new Date(blog.updatedAt).toLocaleDateString()}
        </time>
        <h3 className='mb-3 font-bold text-neutral-900 dark:text-neutral-50'>
          <Link href={`/articles/${blog.id}`}>
            <Image
              loader={microCMSLoader}
              src={blog.image.url}
              alt={blog.title}
              width={800}
              height={900}
              className='absolute top-0 left-0 z-10 transition rounded-lg opacity-0 hover:opacity-40 '
            ></Image>
            {blog.title}
          </Link>
        </h3>
        <p className='mb-4 overflow-hidden text-sm font-medium text-neutral-600 dark:text-neutral-400'>
          {blog.excerpt}
        </p>
        <span className='flex items-center text-sm font-medium text-blue-600/70'>
          Read Article
          <FaLongArrowAltRight className='ml-1' />
        </span>
      </article>
    </li>
  )
}

export default BlogCard
