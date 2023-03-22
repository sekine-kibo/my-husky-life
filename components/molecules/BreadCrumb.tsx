import { BreadCrumbProps } from '@/types/common'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { FaHome, FaAngleRight } from 'react-icons/fa'

type paths = { isLink: boolean; text: string; href?: string }[]

// パンくずリストのパスを生成するメソッド
const createPaths = (path: string, title: string) => {
  const paths = [] as paths
  if (/\/about\//.test(path)) {
    paths.push({ isLink: false, text: 'About' })
  } else if (/\/articles\/page\/.+/.test(path)) {
    paths.push({ isLink: false, text: 'Articles' })
  } else if (/\/articles\/.+/.test(path)) {
    paths.push({ isLink: true, text: 'Articles', href: '/articles' })
    paths.push({ isLink: false, text: title })
  } else if (/\/tags\/.+/.test(path)) {
    paths.push({ isLink: true, text: 'Tags', href: '/tags' })
    paths.push({ isLink: false, text: title })
  } else if (/\/tags/.test(path)) {
    paths.push({ isLink: false, text: 'Tags' })
  }
  return paths
}

const BreadCrumb: FC<BreadCrumbProps> = ({ title }) => {
  const router = useRouter()
  const paths = createPaths(router.asPath, title || '')

  return (
    <ol className='flex items-center px-2 mb-8 space-x-1 md:space-x-3'>
      <li>
        <Link
          href={'/'}
          className='flex items-center text-sm font-medium text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 hover:dark:text-neutral-400'
        >
          <FaHome className='w-4 h-4 mr-2' />
          HOME
        </Link>
      </li>
      {paths.map((path, index) => (
        <li key={index} className='flex items-center'>
          <FaAngleRight className='mr-2 md:mr-1 text-neutral-400 dark:text-neutral-500' />
          {path.isLink ? (
            <Link
              href={path.href || ''}
              className='text-sm font-medium text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 hover:dark:text-neutral-400'
            >
              {path.text}
            </Link>
          ) : (
            <p className='text-sm font-semibold text-blue-600/70'>
              {path.text}
            </p>
          )}
        </li>
      ))}
    </ol>
  )
}

export default BreadCrumb
