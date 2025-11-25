import styled from 'styled-components'
import media from 'styled-media-query'
import theme from '../../styles/theme'

export const fadeIn = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }
`

export const Wrapper = styled.section`
  margin: 0 auto;
  padding: ${theme.spacings.xxlarge} ${theme.spacings.medium};
  border-top: 1px solid ${theme.colors.gray};
  max-width: 1200px;

  ${media.greaterThan('medium')`
    padding: ${theme.spacings.huge} ${theme.spacings.xxxlarge};
  `}
`

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.large};
  align-items: flex-start;
  ${fadeIn};
  animation: fadeIn 0.6s ease-out both;

  ${media.greaterThan('medium')`
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  `}
`

export const TextBlock = styled.div`
  max-width: 720px;
`

export const Overline = styled.p`
  font-family: ${theme.font.familyBody};
  font-size: ${theme.font.sizes.xxsmall};
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${theme.colors.secondary};
  margin-bottom: ${theme.spacings.xxxsmall};
`

export const Title = styled.h2`
  font-family: ${theme.font.familyHeading};
  font-size: clamp(2rem, 3vw, 2.6rem);
  font-weight: 600;
  color: ${theme.colors.texts};
  margin-bottom: ${theme.spacings.xsmall};
`

export const Subtitle = styled.p`
  font-family: ${theme.font.familyBody};
  font-size: 1.1rem;
  color: #6b7280;
  margin-bottom: ${theme.spacings.medium};
  line-height: 1.6;
`

export const Body = styled.div`
  font-family: ${theme.font.familyBody};
  font-size: 1rem;
  line-height: 1.8;
  color: #4b5563;

  p + p {
    margin-top: 0.75rem;
  }
`

export const Image = styled.img`
  width: 260px;
  height: 260px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);

  ${media.greaterThan('medium')`
    width: 320px;
    height: 320px;
  `}
`

export const ListContainer = styled.div`
  margin: ${theme.spacings.huge} auto;
  ${fadeIn};
  animation: fadeIn 0.6s ease-out both;

  ${media.greaterThan('medium')`
    max-width: 900px;
  `}
`

export const ListTitle = styled.h2`
  font-family: ${theme.font.familyHeading};
  font-size: clamp(1.5rem, 2.6vw, 2rem);
  margin-bottom: ${theme.spacings.xxsmall};
  color: ${theme.colors.texts};
`

export const ListSubtitle = styled.h4`
  font-family: ${theme.font.familyBody};
  color: #6b7280;
  font-weight: 400;
  margin-bottom: ${theme.spacings.medium};
`

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${theme.spacings.small};

  padding: ${theme.spacings.small};
  border-radius: 12px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.gray};
  margin-bottom: ${theme.spacings.small};
  transition: box-shadow 0.2s ease, transform 0.15s ease;

  &:hover {
    box-shadow: 0 8px 20px rgba(0,0,0,0.06);
    transform: translateY(-2px);
  }

  strong {
    font-size: 1rem;
    color: ${theme.colors.texts};
  }

  p {
    font-size: 0.95rem;
    color: #374151;
  }

  small {
    font-size: 0.8rem;
    color: #6b7280;
  }

  > p:last-child {
    white-space: nowrap;
    color: ${theme.colors.primary};
    font-weight: 500;
  }
`

export const ResumeCta = styled.a`
  display: inline-flex;
  align-items: center;
  margin-top: ${theme.spacings.medium};
  padding: 0.6rem 1.4rem;
  border-radius: 999px;
  border: 1px solid ${theme.colors.primaryHover};
  font-family: ${theme.font.familyBody};
  font-size: 0.95rem;
  font-weight: 500;
  color: ${theme.colors.primaryHover};
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    transform 0.15s ease;

  &:hover {
    background-color: ${theme.colors.primaryHover};
    color: ${theme.colors.white};
    transform: translateY(-1px);
  }
`

export const FooterNav = styled.nav`
  margin-top: ${theme.spacings.huge};
  padding-top: ${theme.spacings.large};
  border-top: 1px solid ${theme.colors.gray};
  display: flex;
  justify-content: flex-start;

  .footer-link {
    font-size: 0.95rem;
    color: ${theme.colors.primaryHover};
    font-weight: 500;
    text-decoration: none;
  }

  .footer-link:hover {
    text-decoration: underline;
  }
`
