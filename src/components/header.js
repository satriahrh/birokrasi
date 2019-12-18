import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"

const rootPath = `${__PATH_PREFIX__}/`

const Casual = props => {
  let { title } = props
  return (
    <header
      style={{
        padding: `0 ${rhythm(3 / 4)}`,
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

const Super = props => {
  let { title, tagline } = props
  return (
    <header
      style={{
        padding: `${rhythm(4)} ${rhythm(3 / 4)} ${rhythm(4)}`,
        boxShadow: "0 2px 5px 0 #7e7e7e",
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
            marginTop: 0,
            ...scale(1.6),
          }}
        >
          {title}
        </h1>
        <p
          style={{
            color: "hsla(0,0%,0%,0.73)",
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

const Header = props => {
  let { isRoot, siteMeta } = props
  let header
  if (isRoot) {
    header = <Super title={siteMeta.title} tagline={siteMeta.tagline} />
  } else {
    header = <Casual title={siteMeta.title} />
  }
  return header
}

export default Header
