import groq from 'groq'
import Head from 'next/head'
import Link from 'next/link'
import Card from '../components/Card'

import { getClient } from '../lib/sanity.server'
import { CategoryProps, ProjectProps } from './posts'

type PageProps = {
  title: string,
  body: string,
  mainImage: string,
  categoriesTitle: string,
  categoriesSubtitle: string,
  categories: CategoryProps[],
  skillsTitle: string,
  skillsSubtitle: string,
  projectsTitle: string,
  projectsSubtitle: string,
  backgroundImag: string,
}

type Props = {
  page: PageProps
}

const About = ({ page }: Props) => {
  console.log(page)
  return (
    <div className='dashboard'>
     <Head>
      <title>Portfolio | About me</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
     </Head>
     <h1>About me</h1>

    </div>
  )
}


export async function getStaticProps({ preview = false }) {

  const page = await getClient(preview).fetch(groq`
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

  return {
    props: {
      page
    },
  }
}

export default About
