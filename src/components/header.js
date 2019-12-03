import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"

const rootPath = `${__PATH_PREFIX__}/`

const Casual = props => {
  let { title } = props
  return (
    <header
      style={{
        margin: `0 auto`,
        padding: `0 ${rhythm(3 / 4)}`,
        maxWidth: rhythm(24),
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
        margin: `0 auto`,
        padding: `0 ${rhythm(3 / 4)}`,
        maxWidth: rhythm(24),
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

const Header = props => {
  let { isRoot, siteMeta } = props
  let header
  if (isRoot) {
    header = <Super title={siteMeta.title} tagline={siteMeta.tagline}/>
  } else {
    header = <Casual title={siteMeta.title}/>
  }
  return header
}

export default Header

