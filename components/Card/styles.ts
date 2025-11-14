import styled from 'styled-components'
import theme from '../../styles/theme'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: ${theme.spacings.small};
  border-radius: 0.8rem;
  background-color: ${theme.colors.white};
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.15);

  min-width: 20rem;
  max-width: 32rem;
  height: 420px;
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacings.xsmall};

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

export const Link = styled.span`
  display: block;
  margin: 0 auto;
  width: fit-content;
  padding: ${theme.spacings.xxsmall};
  background: ${theme.colors.secondaryDark};
  border-radius: ${theme.border.radius};
  color: ${theme.colors.black};
  font-size: ${theme.font.sizes.xsmall};
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: ${theme.colors.secondary};
  }
`
