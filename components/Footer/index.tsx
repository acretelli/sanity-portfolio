import * as S from "./styles"

const Footer = () => {
  return (
    <S.Wrapper>
      <S.ConnectBlock>
        <S.ConnectTitle>Let’s connect</S.ConnectTitle>

        <S.ConnectLinks>
          <a
            href="https://www.linkedin.com/in/annacbfernandes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <span>–</span>

          <a href="mailto:anna.cbf@gmail.com">
            anna.cbf@gmail.com
          </a>
        </S.ConnectLinks>
      </S.ConnectBlock>

      <S.FooterRights>
        © {new Date().getFullYear()} Anna Fernandes
      </S.FooterRights>
    </S.Wrapper>
  )
}

export default Footer
