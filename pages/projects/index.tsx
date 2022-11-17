import groq from 'groq'
import Head from 'next/head'
import Link from 'next/link'
import Card from '../../components/Card'
import SectionAllProjects from '../../components/SectionAllProjects'

import { getClient } from '../../lib/sanity.server'

export type CategoryProps = {
  id: string,
  title: string,
  description: string,
  image: string
}

export type SkillProps = {
  id: string,
  title: string,
}

export type SlugProps = {
  _type: string,
  current: string
}

export type ProjectProps = {
  _id: string,
  title: string,
  subtitle: string,
  skills: SkillProps[],
  categories: CategoryProps[],
  body: any,
  mainImage: string,
  slug: SlugProps
}

export type PageProps = {
  projectsTitle: string,
  projectsSubtitle: string
}

export type Props = {
  page: PageProps[],
  posts: ProjectProps[]
}

const Projects = ({ page, posts }: Props) => {

  return (
    <div>
     <Head>
      <title>Portfolio | Projects</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
     </Head>

     <SectionAllProjects title={page[0].projectsTitle} subtitle={page[0].projectsSubtitle} cards={posts} />
    </div>
  )
}


export async function getStaticProps({ preview = false }) {
  const posts = await getClient(preview).fetch(groq`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc) {
    _id,
    title,
    subtitle,
    "categories": categories[]->{id, title},
    body,
    mainImage,
    slug,
    publishedAt
  }`)

  const page = await getClient(preview).fetch(groq`
  *[_type == "home"] {
    _id,
    title,
    projectsTitle,
    projectsSubtitle
}`)

  return {
    props: {
      posts,
      page
    },
  }
}

export default Projects
