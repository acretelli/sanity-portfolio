import Card from '../Card'
import * as S from './styles'
import type { PostCardProps } from '../../types/post'

type Props = {
  title: string
  subtitle: string
  cards: PostCardProps[]
}

const SectionAllProjects = ({ title, subtitle, cards }: Props) => {
  return (
    <S.Wrapper>
      <S.Header>
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

export default SectionAllProjects