export interface SlugProps {
  _type: 'slug'
  current: string
}

export interface SanityImage {
  _type: 'image'
  asset: {
    _type: 'reference'
    _ref: string
  }
  alt?: string
}

export interface PostCardProps {
  _id: string
  title: string
  subtitle?: string
  mainImage?: SanityImage
  slug: SlugProps
}