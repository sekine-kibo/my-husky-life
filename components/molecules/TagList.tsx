import { TagListProps } from '@/types/common'
import React, { FC } from 'react'
import Tag from '../atoms/Tag'

const TagList: FC<TagListProps> = ({ tags }) => {
  return (
    <div className='flex justify-center'>
      <ul className='flex flex-wrap w-4/5'>
        {tags.map((tag) => (
          <Tag key={tag.id} tag={tag} />
        ))}
      </ul>
    </div>
  )
}

export default TagList
