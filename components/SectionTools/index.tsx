import { urlFor } from "../../lib/sanity"
import { SkillProps } from "../../pages/projects"
import Button from "../Button"

import * as S from "./styles"

type Props = {
  title: string,
  subtitle: string,
  skills: SkillProps[]
}

const SectionTools = ({ title, subtitle, skills }:Props) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>

      <S.ToolsWrapper>
        {skills?.map((skill, i) => {
          return <>
              { skill && <div key={i}><S.Tool>{skill.title}</S.Tool></div> }
          </>
        })}

      </S.ToolsWrapper>

      <Button href="#projects">Check out my projects</Button>

    </S.Wrapper>
  )
}

export default SectionTools