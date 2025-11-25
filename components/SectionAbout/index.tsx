/* eslint-disable @next/next/no-img-element */
import { PortableText } from "@portabletext/react"
import Link from "next/link"
import { urlFor } from "../../lib/sanity"
import { AboutProps } from "../../pages/about"
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
  const data = page[0]
  const url = data.mainImage ? urlFor(data.mainImage).toString() : ''

  return (
    <S.Wrapper id="about">
      <S.IntroContainer>
        <S.TextBlock>
          <S.Overline>About me</S.Overline>
          <S.Title>{data.title}</S.Title>
          <S.Subtitle>{data.subtitle}</S.Subtitle>

          <S.Body>
            <PortableText value={data.body} components={PostComponents} />
          </S.Body>

          <S.ResumeCta
            href="https://drive.google.com/file/d/14CaIcqDxjT8VQR4JD2uJDIFGszX-q_5g/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download resume
          </S.ResumeCta>
        </S.TextBlock>

        {url && (
          <S.Image
            src={url}
            alt="A photo of Anna"
          />
        )}
      </S.IntroContainer>

      <S.ListContainer>
        <S.ListTitle>{data.jobsTitle}</S.ListTitle>
        <S.ListSubtitle>{data.jobsSubtitle}</S.ListSubtitle>

        {data?.jobs.map((job, i) => (
          <S.ListItem key={i}>
            <div>
              <strong>{job.company}</strong>
              <p>{job.description}</p>
              <small>{job.location}</small>
            </div>
            <p>{job.period}</p>
          </S.ListItem>
        ))}
      </S.ListContainer>

      <S.ListContainer>
        <S.ListTitle>{data.coursesTitle}</S.ListTitle>
        <S.ListSubtitle>{data.coursesSubtitle}</S.ListSubtitle>

        {data?.courses.map((course, i) => (
          <S.ListItem key={i}>
            <div>
              <strong>{course.title}</strong>
              <p>{course.institution}</p>
            </div>
            <p>{course.period}</p>
          </S.ListItem>
        ))}
      </S.ListContainer>

      <S.FooterNav>
        <Link href="/" legacyBehavior>
          <a className="footer-link">← Back to home</a>
        </Link>
      </S.FooterNav>
    </S.Wrapper>
  )
}

export default SectionAbout