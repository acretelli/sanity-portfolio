import styled from 'styled-components'
import theme from '../../styles/theme'

export const Wrapper = styled.div`
  max-width: 1024px;
  margin: 0  auto;
  text-align: center;
`

export const Title = styled.h1`
  margin: ${theme.spacings.xxsmall};
`

export const Subtitle = styled.h3`
  margin-bottom: ${theme.spacings.medium};
`

export const CardsContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${theme.spacings.small};
`

export const ButtonWrapper = styled.div`
  margin: ${theme.spacings.medium} auto;
`
