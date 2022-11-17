import { urlFor } from "../../lib/sanity"
import { ContactProps, SocialLinkProps } from "../../pages/contact"

import * as S from "./styles"

const SectionContact = ({ title, subtitle, socialLinks }:ContactProps) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>

      <S.SocialLinksContainer>
        {socialLinks?.map((socialLink:SocialLinkProps) => {
          const url = urlFor(socialLink.image).toString()
          return <S.SocialLinkWrapper href={socialLink.url} target="_blank" key={socialLink.label}>
              <S.SocialLinkIcon
                alt={title + ' image'}
                src={url}
              />
              <p>{socialLink.label}</p>
            </S.SocialLinkWrapper>
        })}
      </S.SocialLinksContainer>
    </S.Wrapper>
  )
}

export default SectionContact