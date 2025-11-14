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
      
      <Link 
        key={project._id}
        href={`/projects/[slug]`}
        as={`/projects/${project.slug.current}`}
      >
        
      <S.CardContent>
        <S.CardImage
          alt={title + ' image'}
          src={url}
        />
        <S.CardTitle>{title}</S.CardTitle>
        
        {/* <S.CardSkillsWrapper>
          {skills?.map((skill, i) => {
            if (i < 3) {
              return <>
                { skill && <Tag title={skill.title} key={i}/>}
              </>
            }
          })}
          <p>...</p>
        </S.CardSkillsWrapper> */}

        <S.CardText>{subtitle}</S.CardText>
      </S.CardContent>
        <S.Link>Click here to know more</S.Link>
      </Link>

    </S.Wrapper>
  )
}

export default Card