import Image from "next/image"
import Link from "next/link"
import logo from '../../public/logo.png'

import * as S from "./styles"

const Header = () => {
  return (
    <S.Wrapper>
      <S.Logo>
        <Link href="/">
          <Image
            src={logo}
            alt="Travel logo"
            width={140}
            height={140}
            />
        </Link>
      </S.Logo>

      <S.Nav>
        <Link href="/">
          <S.NavLink>home</S.NavLink>
        </Link>
        <Link href="#projects">
          <S.NavLink>projects</S.NavLink>
        </Link>
        <Link href="#about">
          <S.NavLink>about</S.NavLink>
        </Link>
        <Link href="#contact">
          <S.NavLink>contact</S.NavLink>
        </Link>
      </S.Nav>
    </S.Wrapper>
  )
}

export default Header