import { PageTitleProps } from '@/types/common'
import React, { FC } from 'react'

const PageTitle: FC<PageTitleProps> = ({ title, subtitle }) => {
  return (
    <div className='relative flex justify-center mb-10 before:absolute before:left-0 before:top-1/2 before:h-1 before:w-full before:bg-blue-700/30'>
      <h1 className='z-10 max-w-2xl px-3 mx-auto text-4xl font-bold bg-white text-neutral-900 dark:text-neutral-50 dark:bg-neutral-900'>
        {title}
        {subtitle && (
          <span className='flex justify-center text-lg'>{subtitle}</span>
        )}
      </h1>
    </div>
  )
}

export default PageTitle
