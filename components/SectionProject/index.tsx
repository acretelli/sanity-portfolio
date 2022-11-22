/* eslint-disable @next/next/no-img-element */
import { PortableText } from "@portabletext/react"
import { urlFor } from "../../lib/sanity"
import { ProjectProps } from "../../pages/projects"

import Button from "../Button"
import Tag from "../Tag"

import * as S from "./styles"

const PostComponents = {
  types: {
    image: ({ value }: any) => {
      const url:string = value ? urlFor(value).toString() : ''
      return (
        <img
          alt={value.alt || ' '}
          src={url}
        />
      )
    }
  }
}

type Props = {
  project: ProjectProps
}

const SectionProject = ({ project }: Props) => {

  const url = urlFor(project.mainImage).toString()

  return (
    <S.Wrapper>
      {project.mainImage && 
        <S.Image
          src={url}
          alt={`Image of a mockeup of the project ${project.title}`}
        />
      }
          <S.Title>{project.title}</S.Title>
          <S.TagsContainer>
            {project.skills?.map((skill, i) => (
              skill && <div key={i}>
                  <Tag title={skill.title} />
              </div>
            ))}
          </S.TagsContainer>
          <S.TexBlock>
            <PortableText value={project.body} components={PostComponents} />
          </S.TexBlock>
          <S.ButtonWrapper>
            <Button href="/projects">Back to Projects</Button>
          </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export default SectionProject