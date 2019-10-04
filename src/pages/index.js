import React from "react"
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

body{
  padding:0;
  margin:0;
  font-family: 'Lato', serif;
 
}
*, *::before, *::after{
  box-sizing:border-box;
}
`;

const IndexPage = () => (
  <>
    <Global />
    index
  </>
)

export default IndexPage
