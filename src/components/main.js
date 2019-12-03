import React from "react"
import { rhythm } from "../utils/typography"

const Main = props => {
  let { isRoot, children } = props
  let additionalStyle = {}
  if (!isRoot) {
    additionalStyle = {
      minHeight: `100vh`,
    }
  }
  return <main
    style={{
      ...{
        margin: `0 auto`,
        padding: `0 ${rhythm(3 / 4)}`,
        maxWidth: rhythm(24),
      },
      ...additionalStyle,
    }}
  >{children}</main>
}

export default Main

