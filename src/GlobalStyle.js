import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: 0;
  font-family: 'Poppins', sans-serif, inherit;
  padding: 0;
  margin: 0;
  font-size: 0.9rem;
};

body {
  background-color: #27AE60;

}
`
export default GlobalStyle;