// pages/projects/[slug].tsx
/* eslint-disable @next/next/no-img-element */
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import groq from 'groq'

import { getClient } from '../../lib/sanity.server'
import SectionProject from '../../components/SectionProject'

// ---- Types ----

export interface SanityImage {
  _type: 'image'
  asset: {
    _type: 'reference'
    _ref: string
  }
  alt?: string
}

export interface PortableTextBlock {
  _key: string
  _type: 'block'
  children: { _key: string; _type: 'span'; text: string }[]
  [key: string]: any
}

export interface ProcessStep {
  _key: string
  title: string
  description?: PortableTextBlock[]
}

export interface SolutionSection {
  _key: string
  title: string
  slug?: string
  summary?: string
  content?: PortableTextBlock[]
  images?: SanityImage[]
}

export interface SlugProps {
  _type: 'slug'
  current: string
}

export interface PostProps {
  _id: string
  title: string
  heroColorStart?: string
  heroColorEnd?: string
  subtitle?: string
  role?: string
  company?: string
  platform?: string
  duration?: string
  team?: string
  toolsAndMethods?: string[]
  impactSummary?: ProcessStep[]
  context?: PortableTextBlock[]
  challenge?: PortableTextBlock[]
  action?: PortableTextBlock[]
  research?: PortableTextBlock[]
  researchImages?: SanityImage[]
  keyInsights?: string[]
  processSteps?: ProcessStep[]
  solution?: PortableTextBlock[]
  solutionImages?: SanityImage[]
  solutionSections?: SolutionSection[]
  businessImpact?: string[]
  userImpact?: string[]
  teamImpact?: string[]
  learnings?: string[]
  mainImage?: SanityImage
  slug: SlugProps
}

type PageProps = {
  post: PostProps | null
  nextSlug: string | null
}

const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  subtitle,
  heroColorStart,
  heroColorEnd,
  role,
  company,
  platform,
  duration,
  team,
  toolsAndMethods,
  impactSummary,
  context,
  challenge,
  action,
  research,
  researchImages,
  keyInsights,
  processSteps,
  solution,
  solutionImages,
  solutionSections,
  businessImpact,
  userImpact,
  teamImpact,
  learnings,
  mainImage,
  slug
}`

const PostPage: NextPage<PageProps> = ({ post, nextSlug }) => {
  if (!post) return null

  return <SectionProject project={post} nextSlug={nextSlug} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs: string[] = await getClient().fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<PageProps> = async ({
  params,
  preview = false
}) => {
  const currentSlug = params?.slug

  if (!currentSlug || typeof currentSlug !== 'string') {
    return { notFound: true }
  }

  // 1) Post atual
  const post = await getClient(preview).fetch(postQuery, { slug: currentSlug })

  if (!post) {
    return { notFound: true }
  }

  // 2) Lista de slugs ordenados por data
  const allSlugs: string[] = await getClient(preview).fetch(
    groq`*[_type == "post" && defined(slug.current)] | order(publishedAt asc) [].slug.current`
  )

  let nextSlug: string | null = null

  if (allSlugs.length > 0) {
    const index = allSlugs.indexOf(currentSlug)
    const safeIndex = index === -1 ? 0 : index
    const nextIndex = (safeIndex + 1) % allSlugs.length
    nextSlug = allSlugs[nextIndex]
  }

  return {
    props: {
      post: post || null,
      nextSlug
    },
    revalidate: 60
  }
}

export default PostPage