import styled from 'styled-components'
import theme from '../../styles/theme'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.xsmall};
  padding: ${theme.spacings.small};
  border-radius: 0.8rem;
  background-color: ${theme.colors.white};
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.15);

  min-width: 20rem;
  max-width: 32rem;

  text-align: center;
`

export const CardTitle = styled.h3`
  text-decoration: none;
  color: inherit;
`

export const CardText = styled.p`
  font-size: ${theme.font.sizes.xsmall};
`

export const CardImage = styled.img`
  height: 20rem;
  border-radius: 0.4rem;
  object-fit: cover;
`

export const CardSkillsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${theme.spacings.xxsmall};
`
