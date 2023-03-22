import { LinkButtonProps } from '@/types/common'
import Link from 'next/link'
import React, { FC } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

const LinkButton: FC<LinkButtonProps> = ({ href, text }) => {
  return (
    <Link
      href={href}
      className='flex items-center px-5 py-2 font-bold transition rounded-lg shadow-lg text-blue-600/70 shadow-blue-700/50 ring-1 ring-neutral-300/80 dark:ring-neutral-300/20 hover:bg-blue-600/70 hover:text-white hover:ring-white hover:dark:text-neutral-900 hover:dark:ring-neutral-900'
    >
      {text}
      <FaLongArrowAltRight className='ml-1' />
    </Link>
  )
}

export default LinkButton
