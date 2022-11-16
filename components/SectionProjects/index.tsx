import Link from "next/link"
import { ProjectProps } from "../../pages/projects"
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
      {cards?.map((card) => {
        return <Link
          key={card._id}
          href="/projects/[slug]"
          as={`projects/${card.slug.current}`}
          passHref
        >
          <Card project={card} />
        </Link>
      })}
     </S.CardsContainer>
    </S.Wrapper>
  )
}

export default SectionProjects