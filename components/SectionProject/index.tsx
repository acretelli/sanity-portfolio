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
      const url = urlFor(value).toString()
      return (
        <img
          className="post-image"
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
  return (
    <S.Wrapper>
          <S.Title>{project.title}</S.Title>
          <S.TagsContainer>
            {project.categories?.map((category) => (
              category && <>
                  <Tag key={category.id} title={category.title} />
              </>
            ))}
          </S.TagsContainer>
          <S.TexBlock>
            <PortableText value={project.body} components={PostComponents} />
          </S.TexBlock>

          <Button href="/projects">Back to Projects</Button>
    </S.Wrapper>
  )
}

export default SectionProject