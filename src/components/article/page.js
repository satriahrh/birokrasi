import React from "react"
import { rhythm, scale } from "../../utils/typography"

const Page = props => {
  let { article } = props
  return (
    <article>
      <header>
        <h1
          style={{
            marginTop: rhythm(1),
            marginBottom: 0,
          }}
        >
          {article.frontmatter.title}
        </h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
          }}
        >
          {article.frontmatter.date}
        </p>
      </header>
      <section dangerouslySetInnerHTML={{ __html: article.html }} />
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
      <footer></footer>
    </article>
  )
}

export default Page
