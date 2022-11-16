import { urlFor } from "../../lib/sanity"
import { CategoryProps } from "../../pages/projects"
import Button from "../Button"

import * as S from "./styles"

type Props = {
  title: string,
  subtitle: string,
  categories: CategoryProps[]
}

const SectionCategories = ({ title, subtitle, categories }:Props) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      
      {categories?.map((category, i) => {
        const url = urlFor(category.image).toString()
        return <S.SkillContainer key={i}>
          <div>
            <S.SkillTitle>{category.title}</S.SkillTitle>
            <S.SkillText>{category.description}</S.SkillText>
          </div>
          
          <S.SkillImage
                alt={title + ' image'}
                src={url}
          />
        </S.SkillContainer>
      })}

      <Button href="/projects">My projects</Button>

    </S.Wrapper>
  )
}

export default SectionCategories