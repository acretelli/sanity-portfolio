// pages/projects/index.tsx
import groq from 'groq'
import Head from 'next/head'
import type { GetStaticProps, NextPage } from 'next'

import SectionAllProjects from '../../components/SectionAllProjects'
import { getClient } from '../../lib/sanity.server'
import type { PostCardProps } from '../../types/post'

export type PageProps = {
  projectsTitle: string
  projectsSubtitle: string
}

type Props = {
  page: PageProps[]
  posts: PostCardProps[]
}

const Projects: NextPage<Props> = ({ page, posts }) => {
  return (
    <div>
      <Head>
        <title>Portfolio | Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <SectionAllProjects
        title={page[0].projectsTitle}
        subtitle={page[0].projectsSubtitle}
        cards={posts}
      />
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async ({ preview = false }) => {
  const posts: PostCardProps[] = await getClient(preview).fetch(
    groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc) {
        _id,
        title,
        subtitle,
        mainImage,
        slug
      }`
  )

  const page: PageProps[] = await getClient(preview).fetch(
    groq`
      *[_type == "home"] {
        _id,
        title,
        projectsTitle,
        projectsSubtitle
      }`
  )

  return {
    props: {
      posts,
      page
    }
  }
}

export default Projects