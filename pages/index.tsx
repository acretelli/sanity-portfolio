import groq from 'groq'
import Head from 'next/head'
import Divider from '../components/Divider'

import HomeHeader from '../components/HomeHeader'
import SectionCategories from '../components/SectionCategories'
import SectionProjects from '../components/SectionProjects'
import SectionAbout from '../components/SectionAbout'
import SectionContact from '../components/SectionContact'
import SectionTools from '../components/SectionTools'

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
export type CourseProps = {
  title: string,
  institution: string,
  period: string
}

export type JobProps = {
  company: string,
  description: string,
  location: string,
  period: string
}

export type AboutProps = {
  _id: string,
  title: string,
  subtitle: string,
  body: any,
  mainImage: string,
  coursesTitle: string,
  coursesSubtitle: string,
  courses: CourseProps[],
  jobsTitle: string,
  jobsSubtitle: string,
  jobs: JobProps[],
}

type Props = {
  page: PageProps[],
  posts: ProjectProps[],
  about: AboutProps[],
  contactPage: ContactProps[],
}

const Home = ({ page, posts, about, contactPage }: Props) => {
  return (
    <div>
     <Head>
      <title>Anna Fernandes | Portfolio</title>
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

     <Divider />

     {/* <SectionTools title={page[0].skillsTitle} subtitle={page[0].skillsSubtitle} skills={page[0].skills} ></SectionTools> */}

     {/* <Divider /> */}

     <SectionCategories title={page[0].categoriesTitle} subtitle={page[0].categoriesSubtitle} categories={page[0].categories} />
     
     <Divider />
     
     <SectionAbout page={about} />
     
     <Divider />

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
  "categories": categories[]->{id, title, description, skills[]->{title, slug}, image, slug},
  skillsTitle,
  skillsSubtitle,
  "skills": skills[]->{title, slug},
  projectsTitle,
  projectsSubtitle,
  backgroundImage
}`)


const about = await getClient(preview).fetch(groq`
  *[_type == "about"] {
  _id,
  title,
  subtitle,
  body,
  mainImage,
  coursesTitle,
  coursesSubtitle,
  "courses": courses[]->{id, title, institution, period},
  jobsTitle,
  jobsSubtitle,
  "jobs": jobs[]->{id, company, description, location, period},
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
      about,
      contactPage
    },
  }
}

export default Home
