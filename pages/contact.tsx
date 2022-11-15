import groq from 'groq'
import Head from 'next/head'
import Link from 'next/link'
import Card from '../components/Card'

import { getClient } from '../lib/sanity.server'
import { CategoryProps, ProjectProps } from './posts'

export type SkillsProps = {
  id: string,
  title: string,
  slug: string
}

type PageProps = {
  title: string,
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
  backgroundImag: string,
}

type Props = {
  page: PageProps,
  posts: ProjectProps[]
}

const Contact = ({ page }: Props) => {
  console.log(page)
  return (
    <div className='dashboard'>
     <Head>
      <title>Portfolio | Contact</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
     </Head>
     <h1>Contact</h1>

    </div>
  )
}


export async function getStaticProps({ preview = false }) {

  const page = await getClient(preview).fetch(groq`
  *[_type == "contact"] {
  _id,
  title,
  subtitle,
  "socialLinks": socialLinks[]->{id, label, image, url}
}`)

  return {
    props: {
      page
    },
  }
}

export default Contact
