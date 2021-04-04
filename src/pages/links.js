import React from "react"

// Components
import Seo from "../components/Seo"
import Components from "../components/Components"
import Brand from "../components/Brand"

import GlobalStyle from "../assets/styles/GlobalStyles"
import { Normalize } from 'styled-normalize'
import { ThemeProvider } from 'styled-components'


import data from "../data/links.json"

const light = {
  PrimaryColor: "#03a9f4",
  SecundaryColor: "#0286c2",
  TitleColor: "#FFFFFF",
  SubtitleColor: "#a7aab0",
  BgColor: "#232729",
  BgCard: "#16171B",
  IconColor: "#FFFFFF"
};

function IndexPage() {
  const browser = typeof window !== "undefined" && window;

  return (<>
    <Seo data={data.seo_info} url={data.site_url} />
    {browser && (<>
    <Normalize />
    <ThemeProvider theme={light}>
      <GlobalStyle />
        {data.components.map(block => Components(block))}
        <Brand />
      </ThemeProvider>
    </>)}</>);
}

export default IndexPage
