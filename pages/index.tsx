import groq from 'groq'
import Head from 'next/head'
import { getClient } from '../lib/sanity.server'

import HomeHeader from '../components/HomeHeader'
import SectionProjects from '../components/SectionProjects'
import SectionAboutHome from '../components/SectionAboutHome'

import type { PostCardProps } from '../types/post'

type PageProps = {
  title: string,
  subtitle: string,
  body: string,
  mainImage: string,
  projectsTitle: string,
  projectsSubtitle: string,
  backgroundImage: string,
}

export type AboutProps = {
  _id: string,
  title: string,
  subtitle: string,
  body: any,
  mainImage: string,
}

type Props = {
  page: PageProps[],
  posts: PostCardProps[],
  about: AboutProps[],
}

const Home = ({ page, posts, about }: Props) => {
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
        backgroundImage={page[0].backgroundImage}
        mainImage={page[0].mainImage}
     />
     <SectionProjects title={page[0].projectsTitle} subtitle={page[0].projectsSubtitle} cards={posts} />
     <SectionAboutHome page={about} />
    </div>
  )
}


export async function getStaticProps({ preview = false }) {
  const posts: PostCardProps[] = await getClient(preview).fetch(groq`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc) {
    _id,
    title,
    subtitle,
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
  mainImage
}`)


  return {
    props: {
      posts,
      page,
      about
    },
  }
}

export default Home
