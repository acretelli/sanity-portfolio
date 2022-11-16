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

export const SkillContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${theme.spacings.small};
  margin: ${theme.spacings.medium} auto;
  
  ${media.greaterThan('medium')`
    flex-direction: row;

    :nth-child(even) {
      img {
        order: 0;
      }
    }
  `}
`

export const SkillTitle = styled.h4`
  font-size: ${theme.font.sizes.medium};
  font-weight: ${theme.font.bold};
`

export const SkillText = styled.p`
  font-size: ${theme.font.sizes.small};
`

export const SkillImage = styled.img`
  max-width: 400px;
  max-height: 280px;
  object-fit: cover;
`