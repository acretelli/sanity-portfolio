import groq from 'groq'
import Head from 'next/head'

import HomeHeader from '../components/HomeHeader'
import SectionCategories from '../components/SectionCategories'
import SectionContact from '../components/SectionContact'
import SectionProjects from '../components/SectionProjects'

import { getClient } from '../lib/sanity.server'
import { ContactProps } from './contact'
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
  posts: ProjectProps[],
  contactPage: ContactProps[],
}

const Home = ({ page, posts, contactPage }: Props) => {
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
     <SectionContact title={contactPage[0].title} subtitle={contactPage[0].subtitle} socialLinks={contactPage[0].socialLinks}/>

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
    "skills": skills[]->{title, slug},
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
  "skills": skills[]->{title, slug},
  projectsTitle,
  projectsSubtitle,
  backgroundImage
}`)

  const contactPage = await getClient(preview).fetch(groq`
  *[_type == "contact"] {
  _id,
  title,
  subtitle,
  "socialLinks": socialLinks[]->{id, label, image, url}
  }`)

  return {
    props: {
      posts,
      page,
      contactPage
    },
  }
}

export default Home
