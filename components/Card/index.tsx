/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/display-name */
import Link from 'next/link'
import { urlFor } from '../../lib/sanity'
import { ProjectProps } from '../../pages/projects'
import Tag from '../Tag'

import * as S from './styles'

type CardProps = {
  project: ProjectProps
}

const Card = ({ project }:CardProps) => {
  const { title, subtitle, mainImage, skills } = project

  const url = urlFor(mainImage).toString()

  return (
    <S.Wrapper>
      <S.CardContent>
        <S.CardImage
          alt={title + ' image'}
          src={url}
        />
        <S.CardTitle>{title}</S.CardTitle>
        
        <S.CardSkillsWrapper>
          {skills?.map((skill, i) => {
            return <>
              { skill && <Tag title={skill.title} key={i}/>}
            </>
          })}
        </S.CardSkillsWrapper>

        <S.CardText>{subtitle}</S.CardText>
      </S.CardContent>
      <Link 
        key={project._id}
        href={`/projects/[slug]`}
        as={`/projects/${project.slug.current}`}
      >
        <S.Link>Check it out</S.Link>
      </Link>

    </S.Wrapper>
  )
}

export default Card