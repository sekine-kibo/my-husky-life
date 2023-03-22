import InnerFrame from '../atoms/InnerFrame'
import OuterFrame from '../atoms/OuterFrame'
import BreadCrumb from '../molecules/BreadCrumb'
import PageTitle from '../molecules/PageTitle'
import { ArticlePageTemplateProps } from '@/types/common'
import Image from 'next/image'
import React, { FC } from 'react'

const ArticlePageTemplate: FC<ArticlePageTemplateProps> = ({ blog }) => {
  return (
    <article>
      <OuterFrame>
        <InnerFrame>
          <BreadCrumb title={blog.title} />
        </InnerFrame>
        <PageTitle title={blog.title} />
        <InnerFrame>
          <div className='flex flex-col items-center max-w-2xl m-auto'>
            <Image
              alt={blog.title}
              src={blog.image.url}
              width={400}
              height={450}
            />
            <div
              className='prose'
              dangerouslySetInnerHTML={{ __html: `${blog.body}` }}
            />
          </div>
        </InnerFrame>
      </OuterFrame>
    </article>
  )
}

export default ArticlePageTemplate
