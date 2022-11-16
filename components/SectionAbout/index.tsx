/* eslint-disable @next/next/no-img-element */
import { PortableText } from "@portabletext/react"
import { urlFor } from "../../lib/sanity"
import { AboutProps } from "../../pages/about"
import Button from "../Button"
import * as S from "./styles"

const PostComponents = {
  types: {
    image: ({ value }: any) => {
      const url = urlFor(value).toString()
      return (
        <img
          alt={value.alt || ' '}
          src={url}
        />
      )
    }
  }
}

type Props = {
  page: AboutProps[]
}

const SectionAbout = ({ page }: Props) => {
  const url = page[0].mainImage ? urlFor(page[0].mainImage).toString() : ''
  return (
    <S.Wrapper>
      <S.IntroContainer>
        <S.TextBlock>
          <S.Title>{page[0].title}</S.Title>
          <S.Subtitle>{page[0].subtitle}</S.Subtitle>
          <PortableText value={page[0].body} components={PostComponents} />
        </S.TextBlock>
        {page[0].mainImage && <S.Image
          alt={page[0].title + ' image'}
          src={url}
        />}
      </S.IntroContainer>

      <S.Division />

      <S.ListContainer>
        <S.ListTitle>{page[0].coursesTitle}</S.ListTitle>
        <S.ListSubtitle>{page[0].coursesSubtitle}</S.ListSubtitle>
        {page[0]?.courses.map((course, i) => {
          return <S.ListItem key={i}>
            <div>
              <strong>{course.title}</strong>
              <p>{course.institution}</p>
            </div>
              <p>{course.period}</p>
            </S.ListItem>
        })}
      </S.ListContainer>
      <S.ListContainer>
        <S.ListTitle>{page[0].jobsTitle}</S.ListTitle>
        <S.ListSubtitle>{page[0].jobsSubtitle}</S.ListSubtitle>
        {page[0]?.jobs.map((job, i) => {
          return <S.ListItem key={i}>
            <div>
              <strong>{job.company}</strong>
              <p>{job.description}</p>
              <small>{job.location}</small>
            </div>
              <p>{job.period}</p>
            </S.ListItem>
        })}
      </S.ListContainer>

      <Button href="/">Back to Home</Button>
    </S.Wrapper>
  )
}

export default SectionAbout