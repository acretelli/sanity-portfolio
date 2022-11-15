/* eslint-disable @next/next/no-img-element */
import groq from "groq"

import Tag from "../../components/Tag"
import { PortableText } from "@portabletext/react"
import { urlFor } from "../../lib/sanity"
import { getClient } from "../../lib/sanity.server"
import { CategoryProps } from "."
import { GetStaticProps } from "next"

const PostComponents = {
  types: {
    image: ({ value }: any) => {
      const url = urlFor(value).toString()
      return (
        <img
          className="post-image"
          alt={value.alt || ' '}
          src={url}
        />
      )
    }
  }
}

type PostProps = {
  title:string,
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
      { post && <article className="post-container">
          <h1>{post.title}</h1>
          <hr />
          <div className="tag-container">
            {post.categories?.map((category:CategoryProps) => (
              category && <>
                  <Tag key={category.id} title={category.title} />
              </>
            ))}
          </div>

          <PortableText value={post.body} components={PostComponents} />

          <hr />

        </article>}
    </>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0] {
  title,
  "categories": categories[]->{id, title},
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