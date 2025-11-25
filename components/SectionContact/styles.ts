import styled from 'styled-components'
import media from 'styled-media-query'
import theme from '../../styles/theme'

export const Wrapper = styled.section`
  background-color: #111827;
  color: #d1d5db;
  padding: ${theme.spacings.small} ${theme.spacings.medium};
  border-top: 1px solid #e5e7eb;
  
  ${media.greaterThan('medium')`
    padding: ${theme.spacings.large} ${theme.spacings.medium};
  `}
`

export const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: ${theme.spacings.large};
  margin: 0 auto;
`

export const IntroText = styled.div`
`

export const Title = styled.h2`
  font-size: ${theme.font.sizes.large};
  font-weight: 700;
  color: #f9fafb;
  margin-bottom: ${theme.spacings.xxsmall};
`

export const Subtitle = styled.p`
  font-size: 1rem;
  color: #9ca3af;
`

export const SocialLinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: ${theme.spacings.small};
`

export const SocialLinkWrapper = styled.a`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;

  &:hover {
    opacity: 0.8;
  }
`

export const SocialLinkIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: ${theme.spacings.xxxsmall};
  border-radius: 999px;
  object-fit: cover;
  background-color: #f8f8f8;
`

export const SocialLabel = styled.p`
  font-size: 0.9rem;
`