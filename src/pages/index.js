import React from "react"
import { createGlobalStyle } from "styled-components";
import Grid from '../components/Grid'
import Header from '../components/Header'


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
    <Header />
    <Grid />

  </>
)

export default IndexPage





