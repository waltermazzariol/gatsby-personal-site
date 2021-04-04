/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import ReactGA from 'react-ga'

function SEO({ data, metas, url }) {

  if (typeof window !== `undefined`) {
    ReactGA.initialize(data.ua);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  
  const imageURL = data.image_seo
  const metaDescription = data.description_seo
  const metaTags = data.tags_seo
  const lang = data.lang
  const imageURLHeight = "715"
  const imageURLWidth = "715"
  const title=data.title_seo

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: metaTags,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:image`,
          content: imageURL,
        },
        {
          property: "og:image:width",
          content: imageURLWidth,
        },
        {
          property: "og:image:height",
          content: imageURLHeight,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:image`,
          content: imageURL,
        },
        {
          name: `twitter:creator`,
          content: metas.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(metas)}
    >
    </Helmet>
  )
}

SEO.defaultProps = {
  metas: [],
  imageURL: ""
}

export default SEO
