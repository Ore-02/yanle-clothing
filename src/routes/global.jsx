
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
hmtl {
    font-size: 100%;
    box-sizing: border-box;
  }
  
  * *::before, *::after {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    background-color: whitesmoke;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  
  * {
    box-sizing: border-box;
  }
  


`

export default GlobalStyle


