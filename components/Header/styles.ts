import styled, { css } from "styled-components"
import media from "styled-media-query"
import theme from "../../styles/theme"

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: ${theme.spacings.medium};
  width: 100%;
  position: relative;
  z-index: 30;

  ${media.greaterThan("medium")`
    padding: ${theme.spacings.medium} ${theme.spacings.xxxlarge};
  `}
`

export const Logo = styled.div`
  font-size: 1rem;
  font-family: ${theme.font.familyHeading};
  font-weight: 600;
`

{/* DESKTOP NAV */}
export const NavDesktop = styled.nav`
  display: none;

  ${media.greaterThan("medium")`
    display: flex;
    align-items: center;
    gap: 1.6rem;
  `}
`

export const NavLink = styled.p<{ active?: boolean }>`
  font-size: 0.95rem;
  cursor: pointer;
  transition: opacity 0.2s ease;

  ${({ active }) =>
    active &&
    css`
      font-weight: 600;
      opacity: 1;
      text-decoration: underline;
      text-underline-offset: 5px;
    `}

  &:hover {
    opacity: 0.7;
  }
`

export const IconLink = styled.div`
  display: flex;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`

{/* HAMBURGER */}
export const Hamburger = styled.button<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 40;
  padding: 4px;

  span {
    width: 26px;
    height: 3px;
    border-radius: 2px;
    background: ${theme.colors.secondaryDark};
    transition: all 0.25s ease;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      span:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
      }
    `}

  ${media.greaterThan("medium")`
    display: none;
  `}
`

{/* MOBILE MENU */}
export const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 260px;
  background: ${theme.colors.mainBg};
  box-shadow: -4px 0 20px rgba(0,0,0,0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  z-index: 50;
  transition: transform 0.3s ease;

  ${({ isOpen }) =>
    isOpen
      ? css`transform: translateX(0);`
      : css`transform: translateX(100%);`
  }

  ${media.greaterThan("medium")`
    display: none;
  `}
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  font-weight: 300;
  color: ${theme.colors.secondaryDark};
  align-self: flex-end;
  cursor: pointer;
  margin-bottom: 2rem;
`

export const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`

export const MobileLink = styled.p<{ active?: boolean }>`
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  color: ${theme.colors.secondaryDark};

  ${({ active }) =>
    active &&
    css`
      font-weight: 600;
      text-decoration: underline;
      text-underline-offset: 4px;
    `}
`

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.35);
  z-index: 40;

  ${media.greaterThan("medium")`
    display: none;
  `}
`