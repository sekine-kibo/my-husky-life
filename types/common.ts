import { Blog, Tag } from './blog'
import { ReactNode } from 'react'

export type OuterFrameProps = { children: ReactNode }

export type InnerFrameProps = { children: ReactNode }

export type SectionTitleProps = { enTitle: string; jaTitle: string }

export type HomeProps = {
  blogs: Blog[]
  tags: Tag[]
  swiperImages: SwiperImage[]
}

export type FirstViewProps = { swiperImages: SwiperImage[] }

export type SwiperImage = { src: string; alt: string }

export type ImageSwiperProps = { swiperImages: SwiperImage[] }

export type TheLatestSectionProps = { blogs: Blog[] }

export type BlogListProps = { blogs: Blog[] }

export type BlogCardProps = { blog: Blog }

export type TagSectionProps = { tags: Tag[] }

export type TagListProps = { tags: Tag[] }

export type TagProps = { tag: Tag }

export type LinkButtonProps = { href: string; text: string }

export type ArticlePageProps = { blog: Blog }

export type ArticlesPageProps = { blogs: Blog[] } & PaginationProps

export type PageTitleProps = { title: string; subtitle?: string }

// template
export type LayoutProps = { children: ReactNode }

export type ListPageTemplateProps = PageTitleProps &
  BlogListProps &
  PaginationProps

export type ArticlePageTemplateProps = { blog: Blog }

export type TagsPageProps = { tags: Tag[] }

export type PaginationProps = { totalCount: number }

export type BreadCrumbProps = { title?: string }
