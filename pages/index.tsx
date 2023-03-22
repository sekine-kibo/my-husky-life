import FirstView from '@/components/organisms/FirstView'
import TagSection from '@/components/organisms/TagSection'
import TheLatestSection from '@/components/organisms/TheLatestSection'
import Layout from '@/components/templates/Layout'
import { client } from '@/libs/client'
import { HomeProps } from '@/types/common'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

export const getStaticProps: GetStaticProps = async () => {
  const blogs = await client
    .get({ endpoint: 'blog', queries: { orders: '-updatedAt', limit: 6 } })
    .then((res) => res.contents)
  const tags = await client
    .get({
      endpoint: 'tag',
      queries: { limit: 1000, fields: 'id,tag' } // 10件のtag情報の取得で0.002MB(2KB)
    })
    .then((res) => res.contents)
  const { swiperImages } = await fetch('http://localhost:3000/api/config').then(
    (res) => res.json()
  )
  return {
    props: {
      blogs: blogs,
      tags: tags,
      swiperImages: swiperImages
    }
  }
}

const Home: NextPage<HomeProps> = ({ blogs, tags, swiperImages }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Layout>
          <section>
            <FirstView swiperImages={swiperImages} />
            <TheLatestSection blogs={blogs} />
            <TagSection tags={tags} />
          </section>
        </Layout>
      </main>
    </>
  )
}

export default Home
