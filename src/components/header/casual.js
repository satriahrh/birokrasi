import React from "react"
import { Link } from "gatsby"
import { scale } from "../../utils/typography"

const Casual = props => {
  let { title, rootPath } = props
  return (
    <header>
      <Link
        style={{
          textAlign: `center`,
        }}
        to={rootPath}
      >
        <h1
          style={{
            marginTop: 0,
            marginBottom: 0,
            ...scale(0.8),
          }}
        >
          {title}
        </h1>
      </Link>
    </header>
  )
}

export default Casual
