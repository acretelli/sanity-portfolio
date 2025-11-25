import styled from 'styled-components'
import theme from '../../styles/theme'

export const Wrapper = styled.div`
  max-width: 1024px;
  min-height: 100vh;
  margin: ${theme.spacings.small}  auto 0 auto;
  text-align: center;
`

export const Header = styled.div`
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
  
  margin-bottom: ${theme.spacings.medium};
`