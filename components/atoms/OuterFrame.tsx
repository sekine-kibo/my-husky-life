import { OuterFrameProps } from '@/types/common'
import React, { FC } from 'react'

const OuterFrame: FC<OuterFrameProps> = ({ children }) => {
  return (
    <div className='flex justify-center sm:px-8'>
      <div className='w-full max-w-7xl lg:px-8'>{children}</div>
    </div>
  )
}

export default OuterFrame
