import { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import * as S from "./styles"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const isActive = (path: string) => router.pathname === path

  return (
    <S.Wrapper>
      <S.Logo>
        <Link href="/">Anna Fernandes</Link>
      </S.Logo>

      {/* DESKTOP NAV */}
      <S.NavDesktop>
        <Link href="/">
          <S.NavLink active={isActive("/")}>
            Projects
          </S.NavLink>
        </Link>

        <Link href="/about">
          <S.NavLink active={isActive("/about")}>
            About
          </S.NavLink>
        </Link>

        <Link href="https://drive.google.com/file/d/14CaIcqDxjT8VQR4JD2uJDIFGszX-q_5g/view?usp=sharing" target="_blank">
          <S.NavLink>
            Resume
          </S.NavLink>
        </Link>

        <a
          href="https://www.linkedin.com/in/annacbfernandes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <S.IconLink>
            {/* NEW SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"> <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path> </svg>
          </S.IconLink>
        </a>
      </S.NavDesktop>

      {/* HAMBURGER + CLOSE */}
      <S.Hamburger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
        <span />
        <span />
        <span />
      </S.Hamburger>

      {/* MOBILE DRAWER */}
      <S.MobileMenu isOpen={isOpen}>
        <S.CloseButton onClick={() => setIsOpen(false)}>×</S.CloseButton>

        <S.MobileNav>
          <Link href="/" onClick={() => setIsOpen(false)}>
            <S.MobileLink active={isActive("/")}>
              Projects
            </S.MobileLink>
          </Link>

          <Link href="/about" onClick={() => setIsOpen(false)}>
            <S.MobileLink active={isActive("/about")}>
              About
            </S.MobileLink>
          </Link>

          <Link href="https://drive.google.com/file/d/14CaIcqDxjT8VQR4JD2uJDIFGszX-q_5g/view?usp=sharing" onClick={() => setIsOpen(false)}>
            <S.MobileLink>
              Resume
            </S.MobileLink>
          </Link>

          <a
            href="https://www.linkedin.com/in/annacbfernandes/"
            onClick={() => setIsOpen(false)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.MobileLink>
              LinkedIn
            </S.MobileLink>
          </a>
        </S.MobileNav>
      </S.MobileMenu>

      {/* OVERLAY BACKDROP */}
      {isOpen && <S.Overlay onClick={() => setIsOpen(false)} />}
    </S.Wrapper>
  )
}

export default Header
