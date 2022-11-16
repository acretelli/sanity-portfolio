import groq from 'groq'
import Head from 'next/head'
import Link from 'next/link'
import Card from '../components/Card'
import SectionContact from '../components/SectionContact'

import { getClient } from '../lib/sanity.server'

export type SocialLinkProps = {
  image: string,
  label: string,
  url: string
}

export type ContactProps = {
  title: string,
  subtitle: string,
  socialLinks: SocialLinkProps[],
}

type Props = {
  page: ContactProps[]
}

const Contact = ({ page }: Props) => {
  
  return (
    <div>
     <Head>
      <title>Portfolio | Contact</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
     </Head>
     <SectionContact title={page[0].title} subtitle={page[0].subtitle} socialLinks={page[0].socialLinks}/>

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
