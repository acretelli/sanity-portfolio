import styled from 'styled-components'
import media from 'styled-media-query'

import theme from '../../styles/theme'

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;

  text-align: center;
`

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${theme.spacings.medium};

  max-width: 1024px;
  min-height: calc(100vh - 64px);
  margin: 0 auto;
  padding: ${theme.spacings.small};

  ${media.greaterThan('medium')`
    flex-direction: row;
  `}
`

export const TextBlock = styled.div`
`

export const Title = styled.h1`
  margin: ${theme.spacings.xxsmall};
`

export const Subtitle = styled.h2`
  margin-bottom: ${theme.spacings.xsmall};
`

export const Image = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;

  ${media.greaterThan('medium')`
    max-width: 400px;
    height: 100%;
    max-height: 100%;
  `}
`

export const BackgroundImage = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;

`