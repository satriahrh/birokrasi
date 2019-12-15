import React from "react"
import { Link } from "gatsby"
import { rhythm } from '../../utils/typography'
import {iconKtp, iconUnknown} from "../../icons"

const icon = {
  ktp: iconKtp,
  unknown: iconUnknown,
}

const Item = props => {
  let { article } = props
  if (!article) {
    article = {
      fields: {
        slug: "something",
      },
      frontmatter: {
        title: "Beginilah Caranya Mengurus KTP Tanpa Ribet",
        description: "Theres a difference between a variable being undeclared and being undefined.",
        type: "ktp",
      },
    }
  }
  return (
    <Link to={article.fields.slug}>
      <article style={{
        padding: `${rhythm(1/4)}`,
        borderBottom: '1px solid black',
        display: 'flex',
      }}>
        <div
          style={{
            float: 'left',
          }}
        >
          <img
            style={{
              maxWidth: '75px',
              margin: `${rhythm(1/4)}`,
            }}
            src={icon[article.frontmatter.type] || icon.unknown}
          />
        </div>
        <div>
          <h3
            style={{
              margin: 0
            }}
          >
            {article.frontmatter.title}
          </h3>
          <p
            style={{
              color: 'black'
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
