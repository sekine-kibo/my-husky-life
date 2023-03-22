import { PaginationProps } from '@/types/common'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

export const perPage = 3

const Pagination: FC<PaginationProps> = ({ totalCount }) => {
  //
  const router = useRouter()
  const paths = decodeURI(router.asPath).substring(1).split('/')
  const basePath = `${paths[0]}/${paths[1]}`
  const currentPage = Number(paths[2]) || 1

  // 必要なページ数を計算する
  const pageCount = Math.ceil(totalCount / perPage)

  return (
    <>
      {pageCount > 1 && (
        <nav>
          <ul className='flex items-center justify-center'>
            {currentPage !== 1 && (
              <li className='px-4 py-2'>
                <Link
                  href={`/${basePath}/${currentPage - 1}`}
                  className='font-medium text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 hover:dark:text-neutral-400'
                >
                  <span className='sr-only'>Previous</span>
                  <FaAngleLeft />
                </Link>
              </li>
            )}
            {Array.from({ length: pageCount }).map((_, i) => (
              <li key={i} className='px-4 py-2'>
                {currentPage === i + 1 ? (
                  <span className='font-semibold text-blue-600/70'>
                    {i + 1}
                  </span>
                ) : (
                  <Link
                    href={`/${basePath}/${i + 1}`}
                    className='font-medium text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 hover:dark:text-neutral-400'
                  >
                    {i + 1}
                  </Link>
                )}
              </li>
            ))}
            {currentPage !== pageCount && (
              <li className='px-4 py-2'>
                <Link
                  href={`/${basePath}/${currentPage + 1}`}
                  className='font-medium text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 hover:dark:text-neutral-400'
                >
                  <span className='sr-only'>Next</span>
                  <FaAngleRight />
                </Link>
              </li>
            )}
          </ul>
        </nav>
      )}
    </>
  )
}

export default Pagination
