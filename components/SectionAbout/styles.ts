import styled from 'styled-components'
import media from 'styled-media-query'

import theme from '../../styles/theme'

export const Wrapper = styled.div`
  max-width: 1024px;
  min-height: calc(100vh - 160px);
  margin: ${theme.spacings.small}  auto 0 auto;
  padding: ${theme.spacings.xxsmall};
  text-align: center;
`

export const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacings.xsmall};
`

export const TextBlock = styled.div`
`

export const Title = styled.h1`
  margin-bottom: ${theme.spacings.xxsmall};
`

export const Subtitle = styled.h3`
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

export const Division = styled.hr`
  height: 1px;
  width: 90%;
  margin: ${theme.spacings.large} auto;
  background-color: ${theme.colors.primary};
`

export const ListContainer = styled.div`
  max-width: 1024px;
  margin: ${theme.spacings.large} auto;
`

export const ListTitle = styled.h2`
  margin-bottom: ${theme.spacings.xxsmall};
`

export const ListSubtitle = styled.h4`
  margin-bottom: ${theme.spacings.medium};
`

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${theme.spacings.xsmall};

  margin: ${theme.spacings.xsmall} auto;
  padding: ${theme.spacings.xxxsmall};
  border-radius: 4px;
  text-align: left;

  :nth-child(even) {
    background-color: ${theme.colors.gray};
  }
`