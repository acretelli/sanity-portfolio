import Link from "next/link"

import { ProjectProps } from "../../pages/projects"
import Button from "../Button"
import Card from "../Card"

import * as S from "./styles"

type Props = {
  title: string,
  subtitle: string,
  cards: ProjectProps[]
}

const SectionProjects = ({ title, subtitle, cards }:Props) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    
     <S.CardsContainer>
      {cards?.map((card, i) => {
        if (i < 3) {
          return <Card project={card} key={card._id} />
        }
      })}
     </S.CardsContainer>
     <S.ButtonWrapper>
      <Button href="/projects">All Projects</Button>
     </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export default SectionProjects