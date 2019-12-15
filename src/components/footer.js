import React from "react"
import { Link } from "gatsby"

const Footer = props => {
  return (
    <footer
      style={{
        ...{
          textAlign: `center`,
          bottom: 0,
          width: `100%`,
        },
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
}

export default Footer
