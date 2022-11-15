import groq from 'groq'
import Head from 'next/head'
import Link from 'next/link'
import Card from '../components/Card'

import { getClient } from '../lib/sanity.server'

const Home = ({ posts }: any) => {
  console.log(posts)
  return (
    <div className='dashboard'>
     <Head>
      <title>Nomad Travel Blog</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
     </Head>

     <div className='post-container'>
      {posts?.map((post: any) => {
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
    "username": author->username,
    "categories": categories[]->{id, title},
    "authorImage": author->avatar,
    body,
    mainImage,
    slug,
    publishedAt
  }`)

  return {
    props: {
      posts,
    },
  }
}

export default Home
