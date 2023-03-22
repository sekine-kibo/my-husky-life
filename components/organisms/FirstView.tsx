import InnerFrame from '../atoms/InnerFrame'
import OuterFrame from '../atoms/OuterFrame'
import ImageSwiper from '../molecules/ImageSwiper'
import LinkList from '../molecules/LinkList'
import React, { FC } from 'react'

const FirstView: FC = () => {
  return (
    <div className='mb-20'>
      <OuterFrame>
        <h1>My Husky Blog</h1>
      </OuterFrame>
      <ImageSwiper />
      <OuterFrame>
        <InnerFrame>
          <LinkList />
        </InnerFrame>
      </OuterFrame>
    </div>
  )
}

export default FirstView
