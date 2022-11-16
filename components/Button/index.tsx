import React from 'react'

import * as S from './styles'

type Props = {
  children: React.ReactNode
  wide?: boolean
  href?: string
  onClick?: () => void
}

const Button: React.FC<Props> = ({ children, wide, href, onClick }) => (
  <S.ButtonWrapper href={href} wide={wide} onClick={onClick}>
    {children}
  </S.ButtonWrapper>
)

export default Button
