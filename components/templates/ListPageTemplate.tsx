import InnerFrame from '../atoms/InnerFrame'
import OuterFrame from '../atoms/OuterFrame'
import BlogList from '../molecules/BlogList'
import BreadCrumb from '../molecules/BreadCrumb'
import PageTitle from '../molecules/PageTitle'
import Pagination from '../molecules/Pagination'
import { ListPageTemplateProps } from '@/types/common'
import React, { FC } from 'react'

const ListPageTemplate: FC<ListPageTemplateProps> = ({
  title,
  subtitle,
  blogs,
  totalCount
}) => {
  return (
    <OuterFrame>
      <InnerFrame>
        <BreadCrumb title={title} />
      </InnerFrame>
      <PageTitle title={title} subtitle={subtitle} />
      <BlogList blogs={blogs} />
      <Pagination totalCount={totalCount} />
    </OuterFrame>
  )
}

export default ListPageTemplate
