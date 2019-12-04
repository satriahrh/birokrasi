import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteMeta = data.site.siteMetadata
    // const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} siteMeta={siteMeta}>
        <SEO title={siteMeta.homeTitle} description={siteMeta.description} />
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
