import groq from 'groq'
import Head from 'next/head'
import Link from 'next/link'
import Card from '../../components/Card'

import { getClient } from '../../lib/sanity.server'

export type CategoryProps = {
  id: string,
  title: string
}

export type SlugProps = {
  _type: string,
  current: string
}

export type ProjectProps = {
  _id: string,
  title: string,
  categories: CategoryProps[],
  body: string,
  mainImage: string,
  slug: SlugProps,
  publishedAt: string
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
  console.log(posts[0])
  return (
    <div className='dashboard'>
     <Head>
      <title>Portfolio | Projects</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
     </Head>

    <h1>{page[0].projectsTitle}</h1>
    <h3>{page[0].projectsSubtitle}</h3>
     <div className='post-container'>

      {posts?.map((post: ProjectProps) => {
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
