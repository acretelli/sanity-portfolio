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

const SectionAllProjects = ({ title, subtitle, cards }:Props) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    
     <S.CardsContainer>
      {cards?.map((card, i) => {
        return <Link
          key={i}
          href="/projects/[slug]"
          as={`projects/${card.slug.current}`}
          passHref
        >
          <Card project={card} />
        </Link>
      })}
     </S.CardsContainer>
     
     <Button href="/">Back to Home</Button>
    </S.Wrapper>
  )
}

export default SectionAllProjects