import styled from 'styled-components'
import theme from '../../styles/theme'

export const Wrapper = styled.article`
  max-width: 1024px;
  margin: 0 auto;
`

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export const Title = styled.h1`
  margin: ${theme.spacings.small} auto;
  text-align: center;
`

export const TexBlock = styled.div`
  max-width: 600px;
  margin: ${theme.spacings.small} auto;

  p {
    margin: ${theme.spacings.xxsmall} auto;
  }

  img {
    max-height: 400px;
    margin: ${theme.spacings.xxxsmall} auto;
    object-fit: cover;
  }
`



