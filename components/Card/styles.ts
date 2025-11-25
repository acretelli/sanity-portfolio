import styled from 'styled-components'
import theme from '../../styles/theme'
import media from 'styled-media-query'

export const Wrapper = styled.article`
  width: 100%;
  border-radius: 24px;
  padding: ${theme.spacings.large};
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06);
  transition:
    transform 160ms ease-out,
    box-shadow 160ms ease-out;
  cursor: pointer;

  .card-link {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 60px rgba(15, 23, 42, 0.1);
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
  border-radius: 16px;
  background-color: #e5e7eb;

  ${media.greaterThan('medium')`
    height: 260px;
  `}
`

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top left;
  transition: transform 0.3s ease-in-out;

  .card-link:hover & {
    transform: scale(1.04);
  }
`

export const CardContent = styled.div`
  margin-top: ${theme.spacings.small};
  display: flex;
  flex-direction: column;
`

export const CardTitle = styled.h3`
  font-family: ${theme.font.familyHeading};
  font-size: 1.2rem;
  font-weight: 600;
  color: ${theme.colors.secondaryDark};
`

export const CardText = styled.p`
  margin-top: 0.5rem;
  font-family: ${theme.font.familyBody};
  font-size: 0.98rem;
  line-height: 1.6;
  color: #4b5563;
`

export const CtaLink = styled.span`
  display: inline-flex;
  align-items: center;
  margin-top: 0.9rem;
  font-family: ${theme.font.familyBody};
  font-size: 0.95rem;
  font-weight: 500;
  color: ${theme.colors.secondaryDark};
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  span:last-child {
    margin-left: 0.35rem;
    transition: transform 0.2s ease-in-out;
  }

  .card-link:hover & {
    color: #6b7280;

    span:last-child {
      transform: translateX(2px);
    }
  }
`