import * as S from "./styles"

type Props = {
  title: string
}

const Tag = ({ title }: Props) => {

  return (
    <S.Wrapper>
      {title}
    </S.Wrapper>
  )
}

export default Tag