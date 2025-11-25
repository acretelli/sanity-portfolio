import styled from 'styled-components'
import media from 'styled-media-query'
import theme from '../../styles/theme'

export const fadeInUpKeyframes = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const PageWrapper = styled.div`
  margin: 0 auto;
`

export const Hero = styled.header`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: ${theme.spacings.medium} ${theme.spacings.large};
  position: relative;
  color: #f9fafb;
  background-color: #1e0a31;
  overflow: hidden;

  ${media.greaterThan('large')`
    grid-template-columns: 1fr 1.2fr;
  `}
`

export const HeroGradient = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 10% 20%, rgba(108, 45, 179, 0.45) 0%, transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.35) 0%, transparent 50%);
  z-index: 0;
`

export const HeroNoise = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.06;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
`

export const HeroInner = styled.div`
  position: relative;
  z-index: 1;
  margin: 0;
  padding: ${theme.spacings.xxxlarge} ${theme.spacings.medium} 0;

  
  ${media.greaterThan('large')`
    padding:${theme.spacings.xxxlarge};
  `}
`

export const HeroTitle = styled.h1`
  max-width: 720px;
  font-family: ${theme.font.familyHeading};
  font-weight: 600;
  line-height: 1.15;

  font-size: clamp(2.2rem, 4vw, 3.8rem);

  margin-bottom: ${theme.spacings.small};
  color: #ffffff;

  ${fadeInUpKeyframes};
  animation: fadeInUp 0.6s ease-out both;
`

export const HeroSubtitle = styled.p`
  max-width: 680px;
  font-family: ${theme.font.familyBody};
  font-size: clamp(1.05rem, 1.6vw, 1.25rem);
  line-height: 1.7;
  opacity: 0.92;
  color: #e5e7eb;

  margin-bottom: ${theme.spacings.large};

  
  ${fadeInUpKeyframes};
  animation: fadeInUp 0.6s ease-out both;
`

export const HeroMetaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${theme.spacings.medium} ${theme.spacings.large};

  
  ${fadeInUpKeyframes};
  animation: fadeInUp 0.6s ease-out both;

  ${media.greaterThan('large')`
    grid-template-columns: repeat(3, minmax(0, 1fr));
  `}
`

export const HeroMetaItem = styled.div``

export const HeroMetaLabel = styled.p`
  font-family: ${theme.font.familyBody};
  font-size: ${theme.font.sizes.xxxsmall};
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #d1d5db;
  margin-bottom: 0.3rem;

  ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.xxsmall};
  `}
`

export const HeroMetaValue = styled.p`
  font-family: ${theme.font.familyBody};
  font-size: ${theme.font.sizes.small};
  font-weight: 400;
  color: #f9fafb;
  line-height: 1.5;
`

export const HeroImageWrapper = styled.div`
  max-width: 100%;
  height: 320px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 18px 40px rgba(0,0,0,0.25);
  margin-bottom: ${theme.spacings.large};

  
  ${fadeInUpKeyframes};
  animation: fadeInUp 0.6s ease-out both;

  ${media.greaterThan('medium')`
    height: 520px;
  `}
`

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 320px;
  /* box-shadow: 0 18px 45px rgba(15, 23, 42, 0.18); */
  object-fit: cover;
  object-position: top left ;
`

export const MainContent = styled.main`
  margin: 0 auto;
  padding: ${theme.spacings.large} ${theme.spacings.medium};
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.xxxlarge};

  ${media.greaterThan('medium')`
    gap: ${theme.spacings.huge};
  `}
`

export const Section = styled.section`
  padding-top: ${theme.spacings.xxxsmall};

  
  ${fadeInUpKeyframes};
  animation: fadeInUp 0.6s ease-out both;
  
  ${media.greaterThan('medium')`
    padding-top: ${theme.spacings.large};
  `}
`

export const SectionTitle = styled.h2`
  font-family: ${theme.font.familyHeading};
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 600;
  color: #111827;
  margin-bottom: ${theme.spacings.small};

  
  ${fadeInUpKeyframes};
  animation: fadeInUp 0.6s ease-out both;
`

export const SectionLabel = styled.h3`
  font-family: ${theme.font.familyHeading};
  font-size:  ${theme.font.sizes.small};
  letter-spacing: 0.01em;
  color: #374151;
  margin-bottom: 0.6rem;
`

export const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: ${theme.spacings.large};

  ${media.greaterThan('medium')`
    grid-template-columns: repeat(3, minmax(0, 1fr));
  `}
`
export const SectionColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.large};
`

export const TextBlock = styled.div`
  max-width: 760px;
  font-family: ${theme.font.familyBody};
  font-size: ${theme.font.sizes.small};
  line-height: 1.75;
  color: #1f2937; /* gray-800 */

  ${fadeInUpKeyframes};
  animation: fadeInUp 0.6s ease-out both;

  p + p {
    margin-top: 0.85rem;
  }
`

export const SolutionContent = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: ${theme.spacings.medium};

  ${media.greaterThan('medium')`
    grid-template-columns: repeat(2, minmax(0, 1fr));
  `}
`

export const SummaryImpactGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: ${theme.spacings.medium};
    margin-top: ${theme.spacings.medium};

  ${media.greaterThan('medium')`
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: ${theme.spacings.xxxlarge};
    margin-top: ${theme.spacings.large};
  `}
`

export const SummaryImpactCard = styled.div`

  ${media.greaterThan('medium')`
  `}
`

export const SummaryImpactTitle = styled.h3`
  font-size: ${theme.font.sizes.medium};
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.4rem;
`

export const SummaryImpactText = styled.div`
  font-size: 0.9rem;
  line-height: 1.6;
  color: #4b5563;
`


export const ProcessGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacings.medium};

  ${media.greaterThan('medium')`
    flex-wrap: nowrap;
  `}
`

export const ProcessCard = styled.div`
  border-radius: 18px;
  padding: 1.1rem 1.2rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
`

export const ProcessTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.4rem;
`

export const ProcessText = styled.div`
  font-size: 0.9rem;
  line-height: 1.6;
  color: #4b5563;
`

export const ImageGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.medium};
  margin-top: ${theme.spacings.small};

  height: 100%;
  object-fit: cover;

  ${media.greaterThan('medium')`
    min-height: 100%;
    height: 100%;
    flex-direction: row;
    flex-grow: 1;
  `}
`

export const ImageWrapper = styled.figure`
  width: 100%;
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);

  
  ${fadeInUpKeyframes};
  animation: fadeInUp 0.6s ease-out both;
`

export const SectionImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: zoom-in;
`

export const DiscoveryGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: ${theme.spacings.medium};

  ${media.greaterThan('medium')`
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${theme.spacings.xxxlarge};
    margin-top: ${theme.spacings.large};
  `}
`

export const InsightsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${theme.spacings.medium};

  ${media.greaterThan('medium')`
  `}
`

export const List = styled.ul`
  margin-top: ${theme.spacings.xsmall};
  padding-left: 1.1rem;
  font-size: 0.95rem;
  color: #374151;

  li + li {
    margin-top: 0.35rem;
  }

  li::marker {
    color: #4f46e5;
  }
`

export const DeliverablesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.medium};

  ${media.greaterThan('medium')`
    gap: ${theme.spacings.xxxlarge};
  `}
`

export const DeliverableCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacings.xsmall};
`

export const DeliverableTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
`

export const DeliverableSummary = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
`

export const DeliverableText = styled.div`
  max-width: 800px;
  font-size: 0.9rem;
  line-height: 1.6;
  color: #374151;
`

export const ImpactGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: ${theme.spacings.medium};

  ${media.greaterThan('medium')`
    grid-template-columns: repeat(3, minmax(0, 1fr));
  `}
`

export const ImpactCard = styled.div`
  border-radius: 18px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  padding: 1.1rem 1.2rem;
`

export const ImpactLabel = styled.p`
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #4b5563;
  margin-bottom: 0.4rem;
`

export const FooterNav = styled.nav`
  margin-top: ${theme.spacings.huge};
  padding-top: ${theme.spacings.large};
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;

  .footer-link {
    font-size: 0.95rem;
    color: #4f46e5;
    font-weight: 500;
    text-decoration: none;
  }

  .footer-link:hover {
    text-decoration: underline;
  }
`

export const ImageOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.85); /* overlay escuro */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`

export const ZoomedImageWrapper = styled.div`
  position: relative;
  max-width: min(1100px, 90vw);
  max-height: 90vh;
`

export const ZoomedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 18px;
  box-shadow: 0 24px 80px rgba(15, 23, 42, 0.55);
  background: #000;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 12px;
  border: none;
  background: rgba(15, 23, 42, 0.7);
  color: #f9fafb;
  font-size: 1.6rem;
  line-height: 1;
  border-radius: 999px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(15, 23, 42, 0.9);
  }
`


