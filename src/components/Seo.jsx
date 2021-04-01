/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import ReactGA from 'react-ga'

import logo from "../assets/images/seo_preview.jpg"

function SEO({ description, lang, title, metas }) {

  if (typeof window !== `undefined`) {
    ReactGA.initialize("UA-189914825-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  const metaDescription = description
  const imageURL = "https://wansite.co"+logo
  const imageURLHeight = "1200"
  const imageURLWidth = "628"

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={title}
      meta={[
        {
          name: `google-site-verification`,
          content: "jNN2Xr05ADL2kCSLDXLxpMCwsI_LWtpY_tSynUGrCew",
        },
        {
          name: `description`,
          content: metaDescription,
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
          content: metas.siteurl,
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
  lang: `en`,
  metas: [],
  description: ``,
  title: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
