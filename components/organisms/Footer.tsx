import React from 'react'
import OuterFrame from '../atoms/OuterFrame'

const Footer = () => {
  return (
    <footer className='relative mt-20'>
      <OuterFrame>
        <div className='flex justify-center pt-10 pb-20 border-t border-neutral-300/20'>
          <div>
            <small className='text-neutral-400 dark:text-neutral-500'>
              &copy; 2023 Z-HUSKIES.
            </small>
          </div>
        </div>
      </OuterFrame>
    </footer>
  )
}

export default Footer
