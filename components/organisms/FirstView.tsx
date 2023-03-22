import { FirstViewProps } from '@/types/common'
import React, { FC } from 'react'
import InnerFrame from '../atoms/InnerFrame'
import OuterFrame from '../atoms/OuterFrame'
import LinkList from '../molecules/LinkList'
import ImageSwiper from './ImageSwiper'

const FirstView: FC<FirstViewProps> = ({ swiperImages }) => {
  return (
    <div className='mb-20'>
      <OuterFrame>
        <h1>My Husky Blog</h1>
      </OuterFrame>
      <ImageSwiper swiperImages={swiperImages} />
      <OuterFrame>
        <InnerFrame>
          <LinkList />
        </InnerFrame>
      </OuterFrame>
    </div>
  )
}

export default FirstView
