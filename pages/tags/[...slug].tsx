import { perPage } from '@/components/molecules/Pagination'
import Layout from '@/components/templates/Layout'
import ListPageTemplate from '@/components/templates/ListPageTemplate'
import { client } from '@/libs/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'

export const getStaticPaths: GetStaticPaths = async () => {
  // 型
  type GetAllTags = (offset?: number) => any
  type Paths = { params: { slug: string[] } }[]

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

  // 必要なパスを生成するメソッド
  const getAllTagsPagePaths = async () => {
    // tag情報を全件取得
    const tags = await getAllTags()
    const paths: Paths = []
    // for文を用いて非同期処理の逐次実行 ※forEachは利用不可
    for (const tag of tags) {
      // 各タグの記事数を取得しページ数を計算、必要なパスを追加
      await client
        .get({
          endpoint: 'blog',
          queries: {
            limit: 1,
            fields: 'id',
            filters: `tags[contains]${tag.id}`
          }
        })
        .then(({ totalCount }) => {
          Array.from({ length: Math.ceil(totalCount / perPage) }).forEach(
            (_, i) => {
              paths.push({ params: { slug: [tag.id, `${i + 1}`] } })
            }
          )
        })
    }
    return paths
  }

  // getStaticPathsのメイン処理
  const paths = await getAllTagsPagePaths()
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context: any) => {
  const [tagId, page] = context.params.slug
  const { contents, totalCount } = await client.get({
    endpoint: 'blog',
    queries: {
      limit: perPage,
      offset: (page - 1) * perPage,
      filters: `tags[contains]${tagId}`
    }
  })
  const { tag } = await client
    .get({
      endpoint: 'tag',
      queries: { ids: tagId }
    })
    .then((res) => res.contents[0])
  return { props: { blogs: contents, tag: tag, totalCount: totalCount } }
}

const TagPage = ({ blogs, tag, totalCount }: any) => {
  return (
    <>
      <Head>
        <title>{`${tag}の記事一覧`}</title>
        <meta name='description' content='aaaa' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Layout>
          <ListPageTemplate
            title={tag}
            subtitle=''
            blogs={blogs}
            totalCount={totalCount}
          />
        </Layout>
      </main>
    </>
  )
}

export default TagPage
