import styled, { keyframes } from 'styled-components'
import media from 'styled-media-query'
import theme from '../../styles/theme'

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Wrapper = styled.section`
  position: relative;
  padding: ${theme.spacings.xxlarge} ${theme.spacings.medium};
  overflow: hidden;

  ${media.greaterThan('medium')`
    padding: ${theme.spacings.huge} ${theme.spacings.xxxlarge};
    min-height: 80vh;
    display: flex;
    align-items: center;
  `}
`

export const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
  z-index: -2;
`

export const HaloGradient = styled.div`
  position: absolute;
  inset: -20%;
  z-index: -1;
  pointer-events: none;
`

export const ContentWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;

  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.large};

  ${media.greaterThan('medium')`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`

export const TextBlock = styled.div`
  max-width: 640px;
  z-index: 2;
  animation: ${fadeInUp} 700ms ease-out both;
`

export const Overline = styled.p`
  font-family: ${theme.font.familyBody};
  font-size: ${theme.font.sizes.xxsmall};
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${theme.colors.secondary};
  margin-bottom: ${theme.spacings.xxsmall};
`

export const Title = styled.h1`
  font-family: ${theme.font.familyHeading};
  font-weight: 600;
  line-height: 1.1;
  color: ${theme.colors.texts};
  margin-bottom: ${theme.spacings.small};
  font-size: clamp(2.2rem, 4vw, 3.4rem);

  ${media.greaterThan('medium')`
    max-width: 20ch;
  `}
`

export const Subtitle = styled.h2`
  font-family: ${theme.font.familyBody};
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  font-weight: 500;
  line-height: 1.4;
  color: #4b5563;
  margin-bottom: ${theme.spacings.medium};
`

export const Body = styled.div`
  font-family: ${theme.font.familyBody};
  font-size: ${theme.font.sizes.small};
  line-height: 1.7;
  color: #4b5563;
  max-width: 55ch;

  p + p {
    margin-top: ${theme.spacings.xsmall};
  }
`

export const HeroActions = styled.div`
  margin-top: ${theme.spacings.medium};
  display: flex;
  align-items: center;
  gap: ${theme.spacings.small};
  flex-wrap: wrap;
`

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.6rem;
  border-radius: 999px;
  background: linear-gradient(
    135deg,
    ${theme.colors.primary},
    ${theme.colors.primaryHover}
  );
  color: ${theme.colors.white};
  font-family: ${theme.font.familyBody};
  font-size: ${theme.font.sizes.xsmall};
  font-weight: 500;
  box-shadow: 0 18px 40px rgba(88, 28, 135, 0.25);
  cursor: pointer;
  transition:
    transform 150ms ease-out,
    box-shadow 150ms ease-out,
    filter 150ms ease-out;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.02);
    box-shadow: 0 24px 60px rgba(88, 28, 135, 0.3);
  }
`

export const SecondaryLink = styled.a`
  font-family: ${theme.font.familyBody};
  font-size: ${theme.font.sizes.xsmall};
  font-weight: 500;
  color: ${theme.colors.secondaryDark};
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;

  &::after {
    content: '→';
    transition: transform 150ms ease-out;
  }

  &:hover::after {
    transform: translateX(4px);
  }
`

export const Visual = styled.div`
  display: none;

  ${media.greaterThan('medium')`
    display: block;
  `}

  position: relative;
  flex-shrink: 0;
  animation: ${fadeInUp} 700ms ease-out both;
  animation-delay: 120ms;
`

export const Image = styled.img`
  width: 420px;
  max-width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 24px;
  border: 4px solid rgba(139, 92, 246, 0.45);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);
  position: relative;
  z-index: 2;
`

export const ImageBadge = styled.div`
  position: absolute;
  bottom: -16px;
  left: -12px;
  padding: 0.8rem 1rem;
  border-radius: 999px;
  background: #ffffff;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.18);
  display: flex;
  flex-direction: column;
  gap: 2px;
  z-index: 3;

  strong {
    font-family: ${theme.font.familyBody};
    font-size: ${theme.font.sizes.xxsmall};
    font-weight: 600;
    color: ${theme.colors.secondaryDark};
  }

  span {
    font-family: ${theme.font.familyBody};
    font-size: ${theme.font.sizes.tiny};
    color: #6b7280;
  }
`