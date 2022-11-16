import groq from 'groq'
import Head from 'next/head'
import SectionAbout from '../components/SectionAbout'

import { getClient } from '../lib/sanity.server'


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
  page: AboutProps[]
}

const About = ({ page }: Props) => {
  return (
    <div>
     <Head>
      <title>Portfolio | About me</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
     </Head>
     <SectionAbout page={page} />

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
