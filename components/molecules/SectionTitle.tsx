import { SectionTitleProps } from '@/types/common'
import React, { FC } from 'react'

const SectionTitle: FC<SectionTitleProps> = ({ enTitle, jaTitle }) => {
  return (
    <div className='relative flex justify-center mb-10 before:absolute before:left-0 before:top-1/2 before:h-1 before:w-full before:bg-blue-700/30'>
      <h2 className='z-10 px-3 text-4xl font-bold bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50'>
        {`${enTitle}`}
        <span className='flex justify-center text-lg'>{`${jaTitle}`}</span>
      </h2>
    </div>
  )
}

export default SectionTitle
