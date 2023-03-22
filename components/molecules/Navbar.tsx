import { navbar } from '@/public/static/navbar'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

const Navbar: FC = () => {
  const { theme, setTheme } = useTheme()
  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <ul className='flex justify-center max-w-xl px-4 shadow-md rounded-3xl ring-1 ring-zinc-300/80 dark:ring-neutral-300/20 shadow-blue-700/50 bg-white/90 dark:bg-neutral-900/90 backdrop-blur'>
      {navbar.map((item, index) => (
        <li
          key={index}
          className='px-3 py-2.5 text-sm text-neutral-900 dark:text-neutral-50 hover:text-blue-600/70 hover:dark:text-blue-600/70'
        >
          <Link href={item.href}>{item.text}</Link>
        </li>
      ))}
      <li className='flex'>
        <button className='' onClick={handleClick}>
          {theme === 'dark' ? (
            <Image src='/assets/zena.svg' width={35} height={35} alt='' />
          ) : (
            <Image src='/assets/zoe.svg' width={35} height={35} alt='' />
          )}
        </button>
      </li>
    </ul>
  )
}

export default Navbar
