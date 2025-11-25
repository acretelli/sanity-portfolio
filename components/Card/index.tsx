/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { urlFor } from '../../lib/sanity'
import * as S from './styles'
import type { PostCardProps } from '../../types/post'

type CardProps = {
  project: PostCardProps
}

const Card = ({ project }: CardProps) => {
  const { _id, title, subtitle, mainImage, slug } = project

  const imageUrl = mainImage
    ? urlFor(mainImage).width(800).height(600).url()
    : ''

  return (
    <S.Wrapper key={_id}>
      <Link href={`/projects/${slug.current}`} legacyBehavior>
        <a className="card-link">
          {imageUrl && (
            <S.ImageWrapper>
              <S.CardImage alt={`${title} image`} src={imageUrl} />
            </S.ImageWrapper>
          )}

          <S.CardContent>
            <S.CardTitle>{title}</S.CardTitle>
            {subtitle && <S.CardText>{subtitle}</S.CardText>}

            <S.CtaLink>
              <span>View case study</span>
              <span aria-hidden>→</span>
            </S.CtaLink>
          </S.CardContent>
        </a>
      </Link>
    </S.Wrapper>
  )
}

export default Card