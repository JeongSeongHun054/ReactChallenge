import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const globalStyles = createGlobalStyle`
  ${reset};
  *{
    box-sizing: border-box;
  }
  body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 24px;
  }
  a{
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
  h1{
    font-size: 32px;
    font-weight: bold;
  }

  h2{
    font-size: 24px;
    font-weight: bold;
  }

  li{
    font-size: 24px;
    margin: 24px 0;
  }
`;

export default globalStyles;
