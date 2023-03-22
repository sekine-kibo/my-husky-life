import { InnerFrameProps } from '@/types/common'
import React, { FC } from 'react'

const InnerFrame: FC<InnerFrameProps> = ({ children }) => {
  return (
    <div className='relative px-4 sm:px-8 lg:px-12'>
      <div className='max-w-2xl mx-auto lg:max-w-5xl'>{children}</div>
    </div>
  )
}

export default InnerFrame
