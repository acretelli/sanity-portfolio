import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/poppins-v9-latin-regular.woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    text-decoration: none;
    color: inherit;
  }

  img {
    width: 100%;
  }

  ${({ theme }) => css`
    html {
      font-family: 
      Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 62.5%;
      scroll-behavior: smooth;
    }

    body {
      background-color: #f2f2f2;
      color: #000000;
      font-size: 16px;
    }
  `}
`

export default GlobalStyle
