import ArticlePageTemplate from '@/components/templates/ArticlePageTemplate'
import Layout from '@/components/templates/Layout'
import { client } from '@/libs/client'
import { Blog } from '@/types/blog'
import { ArticlePageProps } from '@/types/common'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import React, { FC } from 'react'

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await client
    .get({ endpoint: 'blog', queries: { fields: 'id' } })
    .then((res) => res.contents)
  const paths = blogs.map((blog: Blog) => `/articles/${blog.id}`)
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { id } = context.params
  const blog = await client.get({
    endpoint: 'blog',
    contentId: `${id}`
  })
  const { navbarItems } = await fetch('http://localhost:3000/api/config').then(
    (res) => res.json()
  )
  return { props: { blog: blog, navbarItems: navbarItems } }
}

const ArticlePage: FC<ArticlePageProps> = ({ blog }) => {
  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name='description' content={blog.excerpt} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Layout>
          <ArticlePageTemplate blog={blog} />
        </Layout>
      </main>
    </>
  )
}

export default ArticlePage
