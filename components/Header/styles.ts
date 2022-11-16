import styled from 'styled-components'
import theme from '../../styles/theme'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  background-color: ${theme.colors.black};
  color: ${theme.colors.primary};
`

export const Logo = styled.div`
  width: 64px;
  height: 64px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
`

export const NavLink = styled.p`
  margin: 0 8px;
  cursor: pointer;
`