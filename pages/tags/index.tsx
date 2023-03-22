import Layout from '@/components/templates/Layout'
import TagsPageTemplate from '@/components/templates/TagsPageTemplate'
import { client } from '@/libs/client'
import { TagsPageProps } from '@/types/common'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import React, { FC } from 'react'

export const getStaticProps: GetStaticProps = async () => {
  // 型
  type GetAllTags = (offset?: number) => any

  // tag情報を全件取得するメソッド
  const getAllTags: GetAllTags = async (offset = 0) => {
    const res = await client.get({
      endpoint: 'tag',
      queries: { limit: 1000, offset: offset, fields: 'id,tag' } // 10件のtag情報の取得で0.002MB(2KB)
    })
    if (res.limit + res.offset < res.totalCount) {
      const tags = await getAllTags(res.limit + res.offset)
      return [...res.contents, ...tags]
    }
    return res.contents
  }

  // getStaticPropsのメイン処理
  const tags = await getAllTags()
  return {
    props: {
      tags: tags
    }
  }
}

const index: FC<TagsPageProps> = ({ tags }) => {
  return (
    <>
      <Head>
        <title>タグ一覧</title>
        <meta name='description' content='aaaa' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Layout>
          <TagsPageTemplate tags={tags} />
        </Layout>
      </main>
    </>
  )
}

export default index
