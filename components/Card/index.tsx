/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/display-name */
import { forwardRef } from 'react'
import { urlFor } from '../../lib/sanity'
import { CategoryProps, ProjectProps } from '../../pages/projects'
import Button from '../Button'
import Tag from '../Tag'

import * as S from './styles'

type CardProps = {
  project: ProjectProps,
  onClick?: () => void
}

const Card = forwardRef(({onClick, project }:CardProps, ref:any) => {
  const { _id, title, subtitle, mainImage, categories } = project

  const url = urlFor(mainImage).toString()

  return (
    <S.Card onClick={onClick} ref={ref} key={_id}>
      <S.CardImage
        className="main-image"
        alt={title + ' image'}
        src={url}
      />
      <S.CardTitle>{title}</S.CardTitle>
      
      <S.CardSkillsWrapper>
        {categories.map((category: CategoryProps) => {
          return <>
            { category && <Tag title={category.title} key={category.id}/>}
          </>
        })}
      </S.CardSkillsWrapper>

      <S.CardText>{subtitle}</S.CardText>
    </S.Card>
  )
})

export default Card