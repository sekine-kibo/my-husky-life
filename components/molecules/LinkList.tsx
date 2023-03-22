import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const LinkList = () => {
  return (
    <ul className='flex pl-4 text-neutral-400 dark:text-neutral-500'>
      <li className='mr-6'>
        <Link href='https://twitter.com/'>
          <FaTwitter size='1.5rem' />
        </Link>
      </li>
      <li className='mr-6'>
        <Link href='https://instagram.com/z_huskies?igshid=YmMyMTA2M2Y='>
          <FaInstagram size='1.5rem' />
        </Link>
      </li>
      <li>
        <Link href='https://www.youtube.com/@zoechannel5379/featured'>
          <FaYoutube size='1.5rem' />
        </Link>
      </li>
    </ul>
  )
}

export default LinkList
