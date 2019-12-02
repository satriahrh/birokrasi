import React from "react"
import { Link } from "gatsby"
import { scale } from "../../utils/typography"

const Super = props => {
  let { title, tagline, rootPath } = props
  return (
    <header
      style={{
        paddingTop: `15vh`,
      }}
    >
      <Link
        style={{
          textAlign: `center`,
        }}
        to={rootPath}
      >
        <h1
          style={{
            marginBottom: 0,
            ...scale(1.6),
          }}
        >
          {title}
        </h1>
        <p
          style={{
            color: "black",
            margin: `0 auto`,
            ...scale(0.25),
          }}
        >
          {tagline}
        </p>
      </Link>
    </header>
  )
}

export default Super
