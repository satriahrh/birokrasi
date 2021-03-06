import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../../utils/typography"
import { iconKtp, iconUnknown } from "../../icons"

const icon = {
  ktp: iconKtp,
  unknown: iconUnknown,
}

const Item = props => {
  let { article } = props
  return (
    <Link to={article.fields.slug}>
      <article
        style={{
          padding: `${rhythm(3 / 4)} 0`,
          borderBottom: "1px solid #1e1e1e",
          display: "flex",
        }}
      >
        <div
          style={{
            float: "left",
          }}
        >
          <img
            style={{
              maxWidth: "75px",
              margin: `${rhythm(1 / 4)}`,
            }}
            alt={article.frontmatter.type || "unknown"}
            src={icon[article.frontmatter.type] || icon.unknown}
          />
        </div>
        <div>
          <h3
            style={{
              margin: 0,
            }}
          >
            {article.frontmatter.title}
          </h3>
          <p
            style={{
              color: "hsla(0,0%,0%,0.73)",
              marginBottom: 0,
            }}
            dangerouslySetInnerHTML={{
              __html: article.frontmatter.description || article.excerpt,
            }}
          />
        </div>
      </article>
    </Link>
  )
}

export default Item
