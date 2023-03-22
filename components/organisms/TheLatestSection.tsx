import { TheLatestSectionProps } from '@/types/common'
import React, { FC } from 'react'
import LinkButton from '../atoms/LinkButton'
import OuterFrame from '../atoms/OuterFrame'
import BlogList from '../molecules/BlogList'
import SectionTitle from '../molecules/SectionTitle'

const TheLatestSection: FC<TheLatestSectionProps> = ({ blogs }) => {
  return (
    <section className='mb-20'>
      <OuterFrame>
        <SectionTitle enTitle='THE LATEST' jaTitle='新着記事' />
        <BlogList blogs={blogs} />
        <div className='flex justify-center'>
          <LinkButton href='/articles/page/1' text='Read More' />
        </div>
      </OuterFrame>
    </section>
  )
}

export default TheLatestSection
