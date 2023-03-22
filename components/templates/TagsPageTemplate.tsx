import OuterFrame from '../atoms/OuterFrame'
import BreadCrumb from '../molecules/BreadCrumb'
import PageTitle from '../molecules/PageTitle'
import TagList from '../molecules/TagList'
import React from 'react'

const TagsPageTemplate = ({ tags }: any) => {
  return (
    <OuterFrame>
      <BreadCrumb title='' />
      <PageTitle title='TAGS' subtitle='タグ一覧' />
      <TagList tags={tags} />
    </OuterFrame>
  )
}

export default TagsPageTemplate
