import React from "react"
import Header from "../components/header"
import Footer from "./footer"
import Main from "./main"

class Layout extends React.Component {
  render() {
    const { location, siteMeta, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div
        style={{
          minHeight: `100vh`,
        }}
      >
        <Header isRoot={location.pathname === rootPath} siteMeta={siteMeta}/>
        <Main isRoot={location.pathname === rootPath}>{children}</Main>
        <Footer isRoot={location.pathname === rootPath}/>
      </div>
    )
  }
}

export default Layout
