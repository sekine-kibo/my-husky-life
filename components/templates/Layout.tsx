import { LayoutProps } from '@/types/common'
import React, { FC } from 'react'
import BackGround from '../organisms/BackGround'
import Footer from '../organisms/Footer'
import Header from '../organisms/Header'

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <BackGround />
      <Header />
      <div className='relative'>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
