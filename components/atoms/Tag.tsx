import { TagProps } from '@/types/common'
import Link from 'next/link'
import React, { FC } from 'react'
import { FaTag } from 'react-icons/fa'

const Tag: FC<TagProps> = ({ tag }) => {
  return (
    <li className='px-3 py-1 m-3 font-medium rounded-lg shadow-lg text-neutral-900 dark:text-neutral-50 shadow-blue-700/50 ring-1 ring-neutral-300/80 dark:ring-neutral-300/20 hover:text-neutral-50 hover:bg-blue-600/70 hover:dark:text-neutral-900 hover:dark:ring-neutral-900'>
      <Link href={`/tags/${tag.id}/1`} className='flex items-center'>
        <FaTag className='mr-2' />
        {tag.tag}
      </Link>
    </li>
  )
}

export default Tag
