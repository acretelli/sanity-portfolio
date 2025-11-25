import { PortableText } from "@portabletext/react"
import { urlFor } from "../../lib/sanity"
import * as S from "./styles"
import { AboutProps } from "../../pages"

const PostComponents = {
  types: {
    image: ({ value }: any) => {
      const url = urlFor(value).toString()
      return (
        <img
          alt={value.alt || " "}
          src={url}
        />
      )
    }
  }
}

type Props = {
  page: AboutProps[]
}

const SectionAboutHome = ({ page }: Props) => {
  const data = page[0]
  const url = data?.mainImage ? urlFor(data.mainImage).width(600).height(600).url() : ""

  return (
    <S.Wrapper id="about">
      <S.Inner>
        <S.Overline>About me</S.Overline>

        <S.IntroContainer>
          <S.TextBlock>
            <S.Title>{data.title}</S.Title>
            <S.Subtitle>{data.subtitle}</S.Subtitle>

            <S.ReadMoreLink href="/about">
              Read full bio
            </S.ReadMoreLink>
          </S.TextBlock>

          {/* {url && (
            <S.ImageWrapper>
              <S.Image
                alt={`${data.title} portrait`}
                src={url}
              />
            </S.ImageWrapper>
          )} */}
        </S.IntroContainer>
      </S.Inner>
    </S.Wrapper>
  )
}

export default SectionAboutHome
