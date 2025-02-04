import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['blue-500']};
  }

  body {
    background-color: ${(props) => props.theme['zinc-950']};
    color: ${(props) => props.theme['zinc-200']};
  }

  body, input, textarea {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6, a, label, button {
    font-family: 'Montserrat', sans-serif;
  }

  img {
    display: block;
    max-width: 100%;
  }
`
