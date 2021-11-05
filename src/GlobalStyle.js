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
  background: linear-gradient(to right, #2196f3, #f44336); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
`
export default GlobalStyle;