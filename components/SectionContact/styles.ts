import styled from 'styled-components'
import theme from '../../styles/theme'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  max-width: 1024px;
  min-height: calc(100vh - 160px);
  margin: ${theme.spacings.small}  auto 0 auto;
  text-align: center;
`

export const Title = styled.h1`
  margin: ${theme.spacings.xxsmall};
`

export const Subtitle = styled.h3`
  margin-bottom: ${theme.spacings.medium};
`

export const SocialLinksContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: ${theme.spacings.medium};
`

export const SocialLinkWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  :hover {
    opacity: 0.6;
  }
`

export const SocialLinkIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: ${theme.spacings.xxxsmall};
  border-radius: 50%;
  object-fit: cover;
`