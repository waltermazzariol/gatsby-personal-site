import React from "react"

// Components
import Seo from "../components/Seo"
import Components from "../components/Components"

import GlobalStyle from "../assets/styles/GlobalStyles"
import { Normalize } from 'styled-normalize'
import { ThemeProvider } from 'styled-components'

import data from "../data/main.json"

const light = {
  PrimaryColor: "#03a9f4",
  SecundaryColor: "#0286c2",
  TitleColor: "#141414",
  SubtitleColor: "#4a4a4a",
  BgColor: "#f1f3f4",
  BgCard: "#f1f3f4",
  IconColor: "#FFFFFF"
};

function IndexPage() {
  const browser = typeof window !== "undefined" && window;

  return (<>
        {browser && (<>
    <Seo data={data.seo_info} url={data.site_url}/>
    <Normalize />
    <ThemeProvider theme={light}>
      <GlobalStyle />
        {data.components.map(block => Components(block))}
      </ThemeProvider>
    </>)}</>);
}

export default IndexPage
