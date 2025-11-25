import styled from "styled-components"
import media from "styled-media-query"
import theme from "../../styles/theme"

export const Wrapper = styled.footer`
  width: 100%;
  padding: ${theme.spacings.large} ${theme.spacings.medium};

  background: ${theme.colors.mainBg};
  border-top: 1px solid ${theme.colors.gray};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacings.medium};

  ${media.greaterThan("medium")`
    flex-direction: row;
    justify-content: space-between;
    padding: ${theme.spacings.large} ${theme.spacings.xxxlarge};
  `}
`

export const ConnectBlock = styled.div`
  text-align: center;

  ${media.greaterThan("medium")`
    text-align: left;
  `}
`

export const ConnectTitle = styled.p`
  font-family: ${theme.font.familyHeading};
  color: ${theme.colors.secondaryDark};
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: ${theme.spacings.xxsmall};
`

export const ConnectLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  a {
    font-family: ${theme.font.familyBody};
    font-size: 0.95rem;
    font-weight: 500;
    color: ${theme.colors.secondaryDark};
    transition: opacity 0.2s ease-out;

    &:hover {
      opacity: 0.7;
    }
  }

  span {
    color: ${theme.colors.secondaryDark};
    opacity: 0.6;
  }
`

export const FooterRights = styled.div`
  font-family: ${theme.font.familyBody};
  font-size: ${theme.font.sizes.xxsmall};
  color: #6b7280;
  text-align: center;

  ${media.greaterThan("medium")`
    text-align: right;
  `}
`
