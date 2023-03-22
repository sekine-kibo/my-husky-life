export type Blog = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  excerpt: string
  body: string
  tags: Tag[]
  image: {
    url: string
    height: number
    width: number
  }
}

export type Tag = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  tag: string
}
