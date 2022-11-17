/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/display-name */
import { forwardRef } from 'react'
import { urlFor } from '../../lib/sanity'
import { ProjectProps } from '../../pages/projects'
import Tag from '../Tag'

import * as S from './styles'

type CardProps = {
  project: ProjectProps,
  onClick?: () => void
}

const Card = forwardRef(({onClick, project }:CardProps, ref:any) => {
  const { _id, title, subtitle, mainImage, skills } = project

  const url = urlFor(mainImage).toString()

  return (
    <S.Card onClick={onClick} ref={ref} key={_id}>
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
    </S.Card>
  )
})

export default Card