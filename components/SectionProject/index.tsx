import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { PostProps } from '../../pages/projects/[slug]'
import * as S from './styles'
import { urlFor } from '../../lib/sanity'

type SectionProjectProps = {
  project: PostProps,
  nextSlug: string | null
}

const SectionProject = ({ project, nextSlug }: SectionProjectProps) => {
  const {
    title,
    subtitle,
    heroColorStart,
    heroColorEnd,
    role,
    company,
    platform,
    duration,
    team,
    toolsAndMethods,
    mainImage,
    context,
    challenge,
    action,
    processSteps,
    research,
    researchImages,
    keyInsights,
    solution,
    solutionImages,
    solutionSections,
    impactSummary,
    businessImpact,
    userImpact,
    teamImpact,
    learnings
  } = project

  
  const mainImgURl = urlFor(mainImage).toString()

  
  const [zoomImage, setZoomImage] = useState<string | null>(null)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setZoomImage(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <S.PageWrapper>
      {/* HERO */}
      <S.Hero>
        <S.HeroGradient
          $startColor={heroColorStart}
          $endColor={heroColorEnd}
        />
        <S.HeroNoise />
        <S.HeroInner>
          <S.HeroTitle>{title}</S.HeroTitle>
            {subtitle && <S.HeroSubtitle>{subtitle}</S.HeroSubtitle>}

          <S.HeroMetaGrid>
            {role && (
              <S.HeroMetaItem>
                <S.HeroMetaLabel>Position</S.HeroMetaLabel>
                <S.HeroMetaValue>{role}</S.HeroMetaValue>
              </S.HeroMetaItem>
            )}
            {company && (
              <S.HeroMetaItem>
                <S.HeroMetaLabel>Company</S.HeroMetaLabel>
                <S.HeroMetaValue>{company}</S.HeroMetaValue>
              </S.HeroMetaItem>
            )}
            {platform && (
              <S.HeroMetaItem>
                <S.HeroMetaLabel>Platform</S.HeroMetaLabel>
                <S.HeroMetaValue>{platform}</S.HeroMetaValue>
              </S.HeroMetaItem>
            )}
            {duration && (
              <S.HeroMetaItem>
                <S.HeroMetaLabel>Duration</S.HeroMetaLabel>
                <S.HeroMetaValue>{duration}</S.HeroMetaValue>
              </S.HeroMetaItem>
            )}
            {team && (
              <S.HeroMetaItem>
                <S.HeroMetaLabel>Team</S.HeroMetaLabel>
                <S.HeroMetaValue>{team}</S.HeroMetaValue>
              </S.HeroMetaItem>
            )}
            {!!toolsAndMethods?.length && (
              <S.HeroMetaItem>
                <S.HeroMetaLabel>Tools & methods</S.HeroMetaLabel>
                <S.HeroMetaValue>{toolsAndMethods.join(' · ')}</S.HeroMetaValue>
              </S.HeroMetaItem>
            )}
          </S.HeroMetaGrid>
        </S.HeroInner>

        <S.HeroInner>
            {mainImage && (
              <S.HeroImageWrapper>
                {/* adapte seu url builder aqui se usar @sanity/image-url */}
                <S.HeroImage
                  src={mainImgURl}
                  alt={mainImage.alt || title}
                  />
              </S.HeroImageWrapper>
            )}
        </S.HeroInner>
          
      </S.Hero>

      <S.MainContent>
        {/* CONTEXT / CHALLENGE / ACTION */}
        <S.Section>
          <S.SectionGrid>
              {context && (
                <S.TextBlock>
                  <S.SectionLabel>Context</S.SectionLabel>
                  <PortableText value={context} />
                </S.TextBlock>
              )}

              {challenge && (
                <S.TextBlock>
                  <S.SectionLabel>Challenge</S.SectionLabel>
                  <PortableText value={challenge} />
                </S.TextBlock>
              )}

              {action && (
                <S.TextBlock>
                  <S.SectionLabel>My role</S.SectionLabel>
                  <PortableText value={action} />
                </S.TextBlock>
              )}
          </S.SectionGrid>
        </S.Section>

        {/* SOLUTION OVERVIEW */}
        {(solution || solutionImages?.length) && (
          <S.Section>
              <S.SectionTitle>Solution</S.SectionTitle>
              {solution && (
                <S.TextBlock>
                  <PortableText value={solution} />
                </S.TextBlock>
              )}

              {!!solutionImages?.length && (
                <S.ImageGrid>
                  {solutionImages.map((image) => {
                    const imgURl = urlFor(image).toString()
                    return (
                      <S.ImageWrapper key={image.asset._ref}>
                        <S.SectionImage
                          src={imgURl}
                          alt={image.alt || ''}
                          onClick={() => setZoomImage(imgURl)}
                        />
                      </S.ImageWrapper>
                    )
                  })}
                </S.ImageGrid>
              )}


          </S.Section>
        )}

        <S.Section>
              <S.SectionTitle>Results</S.SectionTitle>

              {!!impactSummary?.length && (
                      <S.SummaryImpactGrid>
                        {impactSummary.map((item, index) => (
                          
                          <S.SummaryImpactCard key={index}>
                            <S.SummaryImpactTitle>{item.title}</S.SummaryImpactTitle>
                            {item.description && (
                              <S.SummaryImpactText>
                                <PortableText value={item.description} />
                              </S.SummaryImpactText>
                            )}
                          </S.SummaryImpactCard>
                        ))}
                      </S.SummaryImpactGrid>
              )}
        </S.Section>

        

        {/* PROCESS OVERVIEW */}
        {!!processSteps?.length && (
          <S.Section>
            <S.SectionTitle>Process overview</S.SectionTitle>
            <S.ProcessGrid>
              {processSteps.map((step) => (
                <S.ProcessCard key={step._key}>
                  <S.ProcessTitle>{step.title}</S.ProcessTitle>
                  {step.description && (
                    <S.ProcessText>
                      <PortableText value={step.description} />
                    </S.ProcessText>
                  )}
                </S.ProcessCard>
              ))}
            </S.ProcessGrid>
          </S.Section>
        )}

        {/* DISCOVERY */}
        {(research || researchImages?.length || keyInsights?.length) && (
          <S.Section>
            <S.DiscoveryGrid>
              <div>
                <S.SectionTitle>Discovery</S.SectionTitle>

                {research && (
                  <S.TextBlock>
                    <PortableText value={research} />
                  </S.TextBlock>
                )}
              </div>

              <S.InsightsWrapper>
                <S.SectionLabel>Friction Points & Insights</S.SectionLabel>
                {!!keyInsights?.length && (
                  <S.List>
                    {keyInsights.map((insight, index) => (
                      <li key={index}>{insight}</li>
                    ))}
                  </S.List>
                )}
              </S.InsightsWrapper>
            </S.DiscoveryGrid>

            {!!researchImages?.length && (
              <S.ImageGrid>
                {researchImages.map((image) => {
                  const imgURl = urlFor(image).toString()
                  return (
                    <S.ImageWrapper key={image.asset._ref}>
                      <S.SectionImage
                        src={imgURl}
                        alt={image.alt || ''}
                        onClick={() => setZoomImage(imgURl)}
                      />
                    </S.ImageWrapper>
                  )
                })}
              </S.ImageGrid>
            )}
          </S.Section>
        )}

        {/* DELIVERABLES (Screens & Design System) */}
        {!!solutionSections?.length && (
          <S.Section>
            <S.SectionTitle>Deliverables</S.SectionTitle>
            <S.DeliverablesSection>
              {solutionSections.map((section) => (
                <S.DeliverableCard key={section._key} id={section.slug}>
                  <S.DeliverableTitle>{section.title}</S.DeliverableTitle>
                  {section.summary && (
                    <S.DeliverableSummary>{section.summary}</S.DeliverableSummary>
                  )}
                  {section.content && (
                    <S.DeliverableText>
                      <PortableText value={section.content} />
                    </S.DeliverableText>
                  )}

                  {!!section.images?.length && (
                    <S.ImageGrid>
                      {section.images.map((image) => {
                        const imgURl = urlFor(image).toString()
                        return (<S.ImageWrapper key={image.asset._ref}>
                          <S.SectionImage
                            src={imgURl}
                            alt={image.alt || section.title}
                            onClick={() => setZoomImage(imgURl)}
                          />
                        </S.ImageWrapper>)
                  })}
                    </S.ImageGrid>
                  )}
                </S.DeliverableCard>
              ))}
            </S.DeliverablesSection>
          </S.Section>
        )}
        

        {/* IMPACT */}
        {(businessImpact?.length ||
          userImpact?.length ||
          teamImpact?.length) && (
          <S.Section>
            <S.SectionTitle>Impact</S.SectionTitle>

            <S.ImpactGrid>
              {!!businessImpact?.length && (
                <S.ImpactCard>
                  <S.ImpactLabel>Business impact</S.ImpactLabel>
                  <S.List>
                    {businessImpact.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </S.List>
                </S.ImpactCard>
              )}

              {!!userImpact?.length && (
                <S.ImpactCard>
                  <S.ImpactLabel>User impact</S.ImpactLabel>
                  <S.List>
                    {userImpact.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </S.List>
                </S.ImpactCard>
              )}

              {!!teamImpact?.length && (
                <S.ImpactCard>
                  <S.ImpactLabel>Team impact</S.ImpactLabel>
                  <S.List>
                    {teamImpact.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </S.List>
                </S.ImpactCard>
              )}
            </S.ImpactGrid>
          </S.Section>
        )}

        {/* KEY LEARNINGS */}
        {!!learnings?.length && (
          <S.Section>
            <S.SectionTitle>Key learnings</S.SectionTitle>
            <S.List>
              {learnings.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </S.List>
          </S.Section>
        )}

        {/* CTA FOOTER */}
        <S.FooterNav>
          <Link href="/" legacyBehavior>
            <a className="footer-link">← Back to home</a>
          </Link>

          <Link href={`/projects/${nextSlug}`} legacyBehavior>
            <a className="footer-link next">Next project →</a>
          </Link>
        </S.FooterNav>

        
        {/* OVERLAY DE ZOOM */}
        {zoomImage && (
          <S.ImageOverlay onClick={() => setZoomImage(null)}>
            <S.ZoomedImageWrapper onClick={(e) => e.stopPropagation()}>
              <S.ZoomedImage src={zoomImage} alt="" />
              <S.CloseButton type="button" onClick={() => setZoomImage(null)}>
                ×
              </S.CloseButton>
            </S.ZoomedImageWrapper>
          </S.ImageOverlay>
        )}
      </S.MainContent>
    </S.PageWrapper>
  )
}

export default SectionProject