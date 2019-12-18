import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageArticle, ListArticle } from "../components/article"

class ArticleTemplate extends React.Component {
  render() {
    const article = this.props.data.markdownRemark
    const siteMeta = this.props.data.site.siteMetadata
    const { previous, next } = this.props.pageContext
    let relatives = []
    if (previous) {
      relatives.push(previous)
    }
    if (next) {
      relatives.push(next)
    }

    return (
      <Layout location={this.props.location} siteMeta={siteMeta}>
        <SEO
          title={article.frontmatter.title}
          description={article.frontmatter.description || article.excerpt}
        />
        <PageArticle article={article} />

        <ListArticle articles={relatives} />
      </Layout>
    )
  }
}

export default ArticleTemplate

export const pageQuery = graphql`
  query ArticleBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
