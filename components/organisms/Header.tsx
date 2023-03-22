import React, { FC } from 'react'
import OuterFrame from '../atoms/OuterFrame'
import Navbar from '../molecules/Navbar'

const Header: FC = () => {
  return (
    <header className='relative mb-12'>
      <OuterFrame>
        <div className='flex justify-center pt-6'>
          <Navbar />
        </div>
      </OuterFrame>
    </header>
  )
}

export default Header
