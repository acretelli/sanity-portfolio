/* eslint-disable @next/next/no-img-element */
import groq from "groq"

import Tag from "../../components/Tag"
import { PortableText } from "@portabletext/react"
import { urlFor } from "../../lib/sanity"
import { getClient } from "../../lib/sanity.server"

const PostComponents = {
  types: {
    image: ({ value }) => {
      return (
        <img
          className="post-image"
          alt={value.alt || ' '}
          src={urlFor(value)}
        />
      )
    }
  }
}

const Post = ({ post }) => {
  const mockPost = {
    title: 'Títulos',
    categories: [{ id: 1, title:'category'}],
    body: '<p>Lorem ipsum</p>',
    authorImage: 'https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    username: 'username',
    about: 'about',
    postedAt: '15/11/2022'
  }
  const { title, categories, body, authorImage, username, about, postedAt } = post
  return (
    <>
      { post && <article className="post-container">
          <h1>{title}</h1>
          <hr />
          <div className="tag-container">
            {categories?.map((category) => (
              category && <>
                  <Tag key={category.id} title={category.title} />
              </>
            ))}
          </div>

          <PortableText value={body} components={PostComponents} />

          <hr />

          <div className="info-container">
            <div className="author-container">
              <img
                className="avatar"
                src={urlFor(authorImage).url()}
                alt={username + ' avatar'}
              />
              <h3>Author: <strong>{username}</strong></h3>
              <p>About Author:</p>

              <p>{about}</p>
              <div className="map-container">


              </div>

            </div>

          </div>
        </article>}
    </>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0] {
  title,
  "username": author->username,
  "about": author->bio,
  "categories": categories[]->{id, title},
  "authorImage": author->avatar,
  body,
  publishedAt,
  mainImage,
  postedAt
}`

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({ params: { slug} })),
    fallback: true
  }
}

export async function getStaticProps({ params, preview = false}) {
  const post = await getClient(preview).fetch(query, { slug: params.slug })

  return {
    props: {
      post,
    }
  }
}

export default Post