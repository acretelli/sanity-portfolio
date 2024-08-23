/* eslint-disable @next/next/no-img-element */
import { PortableText } from "@portabletext/react"
import { urlFor } from "../../lib/sanity"
import { SkillsProps } from "../../pages"

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
  title: string,
  subtitle: string,
  body: any,
  skills: SkillsProps[],
  backgroundImage: string,
  mainImage: string
}

const HomeHeader = ({ title, subtitle, body, skills, backgroundImage, mainImage }: Props) => {
  const backgroundUrl = urlFor(backgroundImage).toString()
  const url = urlFor(mainImage).toString()

  return (
    <S.Wrapper>
      <S.BackgroundImage
        alt="Abstract image of a texture for the background"
        src={backgroundUrl}
      />
      <S.ContentWrapper>
        <S.TextBlock>
          <S.Title>{title}</S.Title>
          <S.Subtitle>{subtitle}</S.Subtitle>
          <PortableText value={body} components={PostComponents} />
        </S.TextBlock>
        <S.Image
          alt={title + ' image'}
          src={url}
        />
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default HomeHeader