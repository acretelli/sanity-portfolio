import styled from 'styled-components'
import media from 'styled-media-query'

import theme from '../../styles/theme'

export const Wrapper = styled.div`
  max-width: 1024px;
  margin: ${theme.spacings.medium} auto;
  padding: ${theme.spacings.small};
  text-align: center;
`

export const Title = styled.h2`
  margin-bottom: ${theme.spacings.xxxsmall};
`

export const Subtitle = styled.h3`
  margin-bottom: ${theme.spacings.xxxsmall};
`

export const ToolsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${theme.spacings.xxsmall};
  margin: ${theme.spacings.small} auto;
`

export const Tool = styled.div`
  padding: ${theme.spacings.xxxsmall};
  background-color: ${theme.colors.secondary};
  border-radius: 4px;
  font-size: ${theme.font.sizes.small};
`
