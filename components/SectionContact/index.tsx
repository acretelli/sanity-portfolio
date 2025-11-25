import { urlFor } from "../../lib/sanity"
import { ContactProps, SocialLinkProps } from "../../pages/contact"

import * as S from "./styles"

const SectionContact = ({ title, subtitle, socialLinks }:ContactProps) => {
  return (
      <S.Wrapper id="contact">
        <S.Inner>
          <S.IntroText>
            <S.Title>{title}</S.Title>
            <S.Subtitle>{subtitle}</S.Subtitle>
          </S.IntroText>
  
          <S.SocialLinksContainer>
            {socialLinks?.map((socialLink) => {
              const url = urlFor(socialLink.image).toString()
              return (
                <S.SocialLinkWrapper
                  href={socialLink.url}
                  target="_blank"
                  key={socialLink.label}
                >
                  <S.SocialLinkIcon
                    alt={socialLink.label}
                    src={url}
                  />
                  <S.SocialLabel>{socialLink.label}</S.SocialLabel>
                </S.SocialLinkWrapper>
              )
            })}
          </S.SocialLinksContainer>
        </S.Inner>
      </S.Wrapper>
  )
}

export default SectionContact