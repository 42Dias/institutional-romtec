import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: linear-gradient(60deg, #252332, #1B1925);
    font-family: ${theme.font.family};
    overflow-x: hidden;
    position: relative;
    color: ${theme.colors.white}
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  &::selection {
    color: ${theme.colors.white};
    background: ${theme.colors.yellow};
  }
`
