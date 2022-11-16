import groq from 'groq'
import Head from 'next/head'
import Link from 'next/link'
import Card from '../components/Card'
import HomeHeader from '../components/HomeHeader'
import SectionCategories from '../components/SectionCategories'
import SectionProjects from '../components/SectionProjects'

import { getClient } from '../lib/sanity.server'
import { CategoryProps, ProjectProps } from './projects'

export type SkillsProps = {
  id: string,
  title: string,
  slug: string
}

type PageProps = {
  title: string,
  subtitle: string,
  body: string,
  mainImage: string,
  categoriesTitle: string,
  categoriesSubtitle: string,
  categories: CategoryProps[],
  skillsTitle: string,
  skillsSubtitle: string,
  skills: SkillsProps[],
  projectsTitle: string,
  projectsSubtitle: string,
  backgroundImage: string,
}

type Props = {
  page: PageProps[],
  posts: ProjectProps[]
}

const Home = ({ page, posts }: Props) => {

  return (
    <div>
     <Head>
      <title>Portfolio</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
     </Head>
     <HomeHeader     
        title={page[0].title}
        subtitle={page[0].subtitle}
        body={page[0].body}
        skills={page[0].skills}
        backgroundImage={page[0].backgroundImage}
        mainImage={page[0].mainImage}
     />
     <SectionProjects title={page[0].projectsTitle} subtitle={page[0].projectsSubtitle} cards={posts} />
      <SectionCategories title={page[0].categoriesTitle} subtitle={page[0].categoriesSubtitle} categories={page[0].categories} />
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
  subtitle,
  body,
  mainImage,
  categoriesTitle,
  categoriesSubtitle,
  "categories": categories[]->{id, title, description, image, slug},
  skillsTitle,
  skillsSubtitle,
  "skills": skills[]->{id, title, slug},
  projectsTitle,
  projectsSubtitle,
  backgroundImage
}`)

  return {
    props: {
      posts,
      page
    },
  }
}

export default Home
