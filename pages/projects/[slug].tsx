/* eslint-disable @next/next/no-img-element */
import groq from "groq"

import { getClient } from "../../lib/sanity.server"
import { CategoryProps, SkillProps, SlugProps } from "."
import { GetStaticProps } from "next"
import SectionProject from "../../components/SectionProject"

type PostProps = {
  _id: string
  title:string,
  subtitle:string,
  slug:SlugProps,
  skills: SkillProps[],
  categories: CategoryProps[],
  body: any,
  mainImage: string
}

type Props = {
  post: PostProps
}

const Post = ({ post }:Props) => {
  return (
    <>
      { post && <SectionProject project={post} />}
    </>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  subtitle,
  slug,
  "categories": categories[]->{id, title},
  "skills": skills[]->{id, title},
  body,
  mainImage
}`

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug: string) => ({ params: { slug} })),
    fallback: true
  }
}

export const getStaticProps:GetStaticProps = async ({ params, preview = false}) => {
  const post = await getClient(preview).fetch(query, { slug: params?.slug })

  return {
    props: {
      post,
    }
  }
}

export default Post