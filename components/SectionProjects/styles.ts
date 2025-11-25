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

export const Header = styled.header`
  margin: 0 auto ${theme.spacings.large};
  max-width: 1280px;
  text-align: left;
`

export const Overline = styled.p`
  font-family: ${theme.font.familyBody};
  font-size: ${theme.font.sizes.xxsmall};
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${theme.colors.secondary};
  margin-bottom: ${theme.spacings.xxxsmall};
`

export const Title = styled.h2`
  font-family: ${theme.font.familyHeading};
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  color: ${theme.colors.texts};
  margin-bottom: ${theme.spacings.xxsmall};
`

export const Subtitle = styled.p`
  font-family: ${theme.font.familyBody};
  font-size: 1.05rem;
  line-height: 1.6;
  color: #6b7280;
  max-width: 60ch;
`

export const CardsContainer = styled.div`
  margin: 0 auto;
  max-width: 1280px;

  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 2.5rem;

  ${media.greaterThan('medium')`
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 3rem;
  `}

  article:nth-child(4n + 1) {
    background: #fdfdfd; 
  }

  article:nth-child(4n + 2) {
    background: #fdfdfd; 
  }

  article:nth-child(4n + 3) {
    background: #fdfdfd; 
  }

  article:nth-child(4n + 4) {
    background: #fdfdfd; 
  }
`

export const ButtonWrapper = styled.div`
  margin: ${theme.spacings.medium} auto;
`