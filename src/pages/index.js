import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ListArticle } from "../components/article"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteMeta = data.site.siteMetadata
    const articles = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} siteMeta={siteMeta}>
        <SEO title={siteMeta.homeTitle} description={siteMeta.description} />
        <ListArticle articles={articles} />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        homeTitle
        tagline
        description
      }
    }
    allMarkdownRemark(filter: {fields: {sourceName: {eq: "article"}}}, sort: { fields: [frontmatter___date], order: DESC }, limit: 20) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`
