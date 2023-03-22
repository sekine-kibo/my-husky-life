import React, { FC } from 'react'

const BackGround: FC = () => {
  return (
    <div className='fixed inset-0 flex justify-center sm:px-8'>
      <div className='flex justify-center w-full max-w-7xl lg:px-8'>
        <div className='w-full bg-white dark:bg-neutral-900 ring-1 ring-neutral-300/20'></div>
      </div>
    </div>
  )
}

export default BackGround
