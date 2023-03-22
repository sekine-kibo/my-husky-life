import React, { FC } from 'react'
import OuterFrame from '../atoms/OuterFrame'
import { TagSectionProps } from '@/types/common'
import TagList from '../molecules/TagList'
import SectionTitle from '../molecules/SectionTitle'

const TagSection: FC<TagSectionProps> = ({ tags }) => {
  return (
    <section className='mb-20'>
      <OuterFrame>
        <SectionTitle enTitle='TAGS' jaTitle='タグ' />
        <TagList tags={tags} />
      </OuterFrame>
    </section>
  )
}

export default TagSection
