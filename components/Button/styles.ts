import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import theme from '../../styles/theme'

type Props = {
  wide?: boolean
}

const buttonModifiers = {
  wide: () => css`
    padding: 0.4rem ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      padding: 0.8rem ${theme.spacings.large};
    `}
  `
}

export const ButtonWrapper = styled.a<Props>`
  ${({ wide }) => css`
    display: inline-flex;
    align-items: center;
    margin-top: ${theme.spacings.small};
    font-size: 0.95rem;
    font-weight: 500;
    color: #111827;
    cursor: pointer;

    &:hover {
      color: #6b7280;
    }

    ${wide && buttonModifiers.wide()};
  `}
`
