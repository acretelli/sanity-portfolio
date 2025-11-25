/* eslint-disable @next/next/no-img-element */
import { PortableText } from "@portabletext/react"
import { urlFor } from "../../lib/sanity"

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
  backgroundImage: string,
  mainImage: string
}

const HomeHeader = ({ title, subtitle, body, backgroundImage, mainImage }: Props) => {
  const backgroundUrl = urlFor(backgroundImage).toString()
  const url = urlFor(mainImage).toString()

  return (
    <S.Wrapper>
      {!!backgroundImage.length && (
        <S.BackgroundImage
          alt="Abstract image of a texture for the background"
          src={backgroundUrl}
          />
      )}

      <S.HaloGradient />

      <S.ContentWrapper>
        <S.TextBlock>
          <S.Overline>Senior Product Designer · UX/UI Designer</S.Overline>
          <S.Title>{title}</S.Title>
          <S.Subtitle>{subtitle}</S.Subtitle>

          <S.Body>
            <PortableText value={body} components={PostComponents} />
          </S.Body>

          <S.HeroActions>
            <S.PrimaryButton href="#projects">
              View selected projects
            </S.PrimaryButton>

            <S.SecondaryLink href="#about">
              About me
            </S.SecondaryLink>
          </S.HeroActions>
        </S.TextBlock>

        <S.Visual>
          <S.Image
            alt={title + " image"}
            src={url}
          />
          <S.ImageBadge>
            <strong>10+ years in digital design</strong>
            <span>20M+ users impacted worldwide</span>
          </S.ImageBadge>
        </S.Visual>
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default HomeHeader
