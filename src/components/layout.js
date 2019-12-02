import React from "react"
import { HeaderSuper, HeaderCasual } from "../components/header"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, siteMeta, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    let header
    let contentStyle = {
      margin: `0 auto`,
      padding: `0 ${rhythm(3 / 4)}`,
      maxWidth: rhythm(24),
    }
    let footerStyle = {}
    let mainStyle = {}
    if (location.pathname === rootPath) {
      header = (
        <HeaderSuper
          style={contentStyle}
          title={siteMeta.title}
          tagline={siteMeta.tagline}
          rootpath={rootPath}
        />
      )
      footerStyle = {
        position: `absolute`,
      }
    } else {
      header = (
        <HeaderCasual
          style={contentStyle}
          title={siteMeta.title}
          rootPath={rootPath}
        />
      )
      mainStyle = {
        minHeight: `100vh`,
      }
    }

    let footer = (
      <footer
        style={{
          ...{
            textAlign: `center`,
            bottom: 0,
            width: `100%`,
          },
          ...footerStyle,
        }}
      >
        <p
          style={{
            marginBottom: 0,
          }}
        >
          satriahrh © {new Date().getFullYear()} |{" "}
          <Link to={"/tentang-kami"}>tentang kami</Link> |{" "}
          <Link to={"/layanan-di-birokrasi-id"}>layanan</Link> |{" "}
          <Link to={"/kontak"}>kontak</Link>
        </p>
      </footer>
    )

    return (
      <div
        style={{
          minHeight: `100vh`,
        }}
      >
        {header}
        <main style={{ ...contentStyle, ...mainStyle }}>{children}</main>
        {footer}
      </div>
    )
  }
}

export default Layout
