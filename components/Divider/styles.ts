import styled from 'styled-components'

import theme from '../../styles/theme'

export const Wrapper = styled.hr`
  height: 1px;
  width: 90%;
  margin: ${theme.spacings.large} auto;
  background-color: ${theme.colors.primary};
`