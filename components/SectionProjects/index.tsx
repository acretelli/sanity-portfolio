import Card from "../Card"
import { PostCardProps } from "../../types/post"
import * as S from "./styles"

type Props = {
  title: string
  subtitle: string
  cards: PostCardProps[]
}

const SectionProjects = ({ title, subtitle, cards }: Props) => {
  return (
    <S.Wrapper id="projects">
      <S.Header>
        <S.Overline>Selected projects</S.Overline>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.Header>

      <S.CardsContainer>
        {cards?.map((card) => (
          <Card project={card} key={card._id} />
        ))}
      </S.CardsContainer>
    </S.Wrapper>
  )
}

export default SectionProjects