import { perPage } from '@/components/molecules/Pagination'
import Layout from '@/components/templates/Layout'
import ListPageTemplate from '@/components/templates/ListPageTemplate'
import { client } from '@/libs/client'
import { ArticlesPageProps } from '@/types/common'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import React, { FC } from 'react'

export const getStaticPaths: GetStaticPaths = async () => {
  const { totalCount } = await client.get({
    endpoint: 'blog',
    queries: { limit: 0, fields: 'id' }
  })
  const paths = Array.from({ length: Math.ceil(totalCount / perPage) }).map(
    (_, i) => `/articles/page/${i + 1}`
  )
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { id } = context.params
  const { contents, totalCount } = await client.get({
    endpoint: 'blog',
    queries: {
      limit: perPage,
      offset: (id - 1) * perPage
    }
  })
  return {
    props: {
      blogs: contents,
      totalCount: totalCount
    }
  }
}

const ArticlesPage: FC<ArticlesPageProps> = ({ blogs, totalCount }) => {
  return (
    <>
      <Head>
        <title>記事一覧</title>
        <meta name='description' content='aaaa' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Layout>
          <ListPageTemplate
            title='ARTICLES'
            subtitle='記事一覧'
            blogs={blogs}
            totalCount={totalCount}
          />
        </Layout>
      </main>
    </>
  )
}

export default ArticlesPage
