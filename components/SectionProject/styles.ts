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
  gap: ${theme.spacings.xxsmall};
`

export const TagsHeadline = styled.h6`
  margin-right: ${theme.spacings.xxsmall};
  font-size: ${theme.font.sizes.xsmall};
`

export const Title = styled.h1`
  margin: ${theme.spacings.small} auto;
  font-size: ${theme.font.sizes.xlarge};
  text-align: center;
`

export const TexBlock = styled.div`
  margin: ${theme.spacings.small} auto;
  padding: ${theme.spacings.xsmall};

  h2 {
    max-width: 600px;
    margin: ${theme.spacings.small} auto;
    font-size: ${theme.font.sizes.large};
  }

  h3 {
    max-width: 600px;
    margin: ${theme.spacings.small} auto;
    font-size: ${theme.font.sizes.medium};
  }

  ul {
    max-width: 600px;
    margin: ${theme.spacings.xxsmall} auto;
    list-style: none;
    list-style-type: none;
  }

  li {
    line-height: 160%;
  }

  p {
    max-width: 600px;
    margin: ${theme.spacings.xxsmall} auto;
    line-height: 160%;
  }

  p:first-of-type::first-letter {
    font-size: 4rem;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.secondaryDark};
    float: left;
    margin: -8px 8px;
  }

  img {
    max-height: 36rem;
    margin: ${theme.spacings.xsmall} auto;
    object-fit: cover;
  }
`

export const Image = styled.img`
  height: 200px;
  object-fit: cover;
`

export const ButtonWrapper = styled.div`
  width: 100%;
  display:flex;
  justify-content: flex-start;
`


