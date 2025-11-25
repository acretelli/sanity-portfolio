import styled from 'styled-components'
import media from 'styled-media-query'
import theme from '../../styles/theme'

export const Wrapper = styled.section`
  margin: 0 auto;
  padding: ${theme.spacings.xxlarge} ${theme.spacings.medium};
  border-top: 1px solid ${theme.colors.gray};

  ${media.greaterThan('medium')`
    padding: ${theme.spacings.huge} ${theme.spacings.xxxlarge};
  `}
`

export const Inner = styled.div`
  margin: 0 auto;
  max-width: 1280px;
`

export const Overline = styled.p`
  font-family: ${theme.font.familyBody};
  font-size: ${theme.font.sizes.xxsmall};
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${theme.colors.secondary};
  margin-bottom: ${theme.spacings.small};
`

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${theme.spacings.large};

  ${media.greaterThan('medium')`
    flex-direction: row;
    align-items: center;
  `}
`

export const TextBlock = styled.div`
  flex: 1;
  max-width: 640px;
`

export const Title = styled.h2`
  font-family: ${theme.font.familyHeading};
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  color: ${theme.colors.texts};
  margin-bottom: ${theme.spacings.small};
`

export const Subtitle = styled.p`
  font-family: ${theme.font.familyBody};
  font-size: 1.05rem;
  line-height: 1.6;
  color: #6b7280;
  margin-bottom: ${theme.spacings.small};
`

export const Body = styled.div`
  font-family: ${theme.font.familyBody};
  font-size: 1rem;
  line-height: 1.8;
  color: #4b5563;

  p + p {
    margin-top: 0.75rem;
  }
`

export const ReadMoreLink = styled.a`
  display: inline-flex;
  align-items: center;
  margin-top: ${theme.spacings.small};
  font-family: ${theme.font.familyBody};
  font-size: 0.95rem;
  font-weight: 500;
  color: ${theme.colors.secondaryDark};
  cursor: pointer;
  position: relative;

  &::after {
    content: '→';
    margin-left: 0.45rem;
    transition: transform 150ms ease-out;
  }

  &:hover::after {
    transform: translateX(4px);
  }
`

export const ImageWrapper = styled.div`
  flex-shrink: 0;
  width: 220px;
  height: 220px;
  border-radius: 999px;
  overflow: hidden;
  background: radial-gradient(circle at 30% 20%, #e0e7ff 0, transparent 55%),
              radial-gradient(circle at 80% 80%, #fce7f3 0, transparent 55%);

  display: none;

  ${media.greaterThan('medium')`
    display: block;
  `}
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`