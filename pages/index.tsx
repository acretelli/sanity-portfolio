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

const Home = ({ page, posts }: Props) => {
  console.log(page)
  return (
    <div className='dashboard'>
     <Head>
      <title>Portfolio</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
     </Head>

     <div className='post-container'>
      {posts?.map((post) => {
        return <Link
          key={post._id}
          href="/posts/[slug]"
          as={`posts/${post.slug.current}`}
          passHref
        >
          <Card post={post} />
        </Link>
      })}

     </div>
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
